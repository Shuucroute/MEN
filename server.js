import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify((error) => {
  if (error) {
    console.error('Erreur SMTP:', error);
  } else {
    console.log('Serveur SMTP prêt à envoyer des emails');
  }
});

app.post('/api/send-email', async (req, res) => {
  console.log("Body reçu :", req.body);
  const { type } = req.body;

  if (type === 'pdf') {
    // === Cas Advance_enrolment.vue ===
    try {
      const {
        nom,
        prenom,
        email,
        telephone,
        adresse,
        instrument,
        reduction
      } = req.body;

      const doc = new PDFDocument();
      const bufferChunks = [];
      const stream = new PassThrough();

      doc.pipe(stream);

      doc.fontSize(20).text("Fiche de pré-inscription", { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(`Nom : ${nom}`);
      doc.text(`Prénom : ${prenom}`);
      doc.text(`Email : ${email}`);
      doc.text(`Téléphone : ${telephone}`);
      doc.text(`Adresse : ${adresse}`);
      doc.text(`Instrument choisi : ${instrument}`);
      doc.text(`Éligible à une réduction : ${reduction ? 'Oui' : 'Non'}`);
      doc.end();

      stream.on('data', chunk => bufferChunks.push(chunk));
      stream.on('end', async () => {
        const pdfBuffer = Buffer.concat(bufferChunks);

        const mailOptions = {
          from: `"Médoc en Notes" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_USER,
          subject: `Pré-inscription de ${prenom} ${nom}`,
          text: `Une nouvelle fiche de pré-inscription a été envoyée.`,
          attachments: [{
            filename: `Preinscription-${nom}-${prenom}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf'
          }]
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('PDF envoyé par email:', info.messageId);
        res.status(200).json({ success: true, message: 'PDF envoyé par mail' });
      });

    } catch (error) {
      console.error('Erreur PDF :', error);
      res.status(500).json({ success: false, message: 'Erreur serveur PDF' });
    }

  } else {
    // === Cas Asso.vue ===
    try {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Veuillez remplir tous les champs obligatoires'
        });
      }

      const mailOptions = {
        from: `"Médoc en Notes" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `Nouveau message de ${name}`,
        text: `
          Nom: ${name}
          Email: ${email}
          Téléphone: ${phone || 'Non fourni'}
          
          Message:
          ${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c3e50;">Nouveau message de contact</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        `
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email simple envoyé:', info.messageId);

      res.status(200).json({
        success: true,
        message: 'Message envoyé avec succès'
      });

    } catch (error) {
      console.error('Erreur envoi simple :', error);
      res.status(500).json({ success: false, message: 'Erreur serveur simple' });
    }
  }
});

app.get('/', (req, res) => {
  res.send('API Médoc en Notes opérationnelle');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
