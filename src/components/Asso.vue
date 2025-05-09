<template>
  <div class="association-page">
    <h1>L'Association</h1>
    <p class="intro-text">Médoc en Notes est une association à but non lucratif (loi 1901), créée en juillet 2021. Elle gère l'école de musique basée à Soussans et a pour but de continuer l'aventure initiée en 2015 par l'association L'Entre-Deux-Danses puis Golpe Musique.</p>

    <section class="mission-section">
      <h2>Nos Missions</h2>
      <ul class="mission-list">
        <li><strong>Équiper l'école</strong> : Nous équipons l'école pour ses activités (instruments, équipements) grâce aux cotisations d'adhésion et aux subventions.</li>
        <li><strong>Rétribution équitable</strong> : Nous veillons à une juste rétribution de notre équipe pédagogique grâce aux tarifs d'inscription aux cours.</li>
        <li><strong>Promotion</strong> : Nous promouvons l'école à travers des impressions, le web et les réseaux sociaux.</li>
        <li><strong>Écoute et adaptation</strong> : Nous sommes à l'écoute des besoins et des envies des élèves, enseignants et partenaires municipaux.</li>
        <li><strong>Valorisation de la pratique musicale</strong> : Nous valorisons la pratique musicale de l'école et participons à des animations lors de diverses manifestations associatives ou municipales, en plus d'organiser un concert de fin d'année.</li>
        <li><strong>Intercommunalité musicale</strong> : Nous développons une intercommunalité musicale pour faciliter l'accès à la pratique de la musique pour tous et multiplier les opportunités de manifestations musicales et culturelles au sein du Médoc.</li>
      </ul>
      <div class="support-section">
        <p class="thanks">Médoc en Notes bénéficie du soutien financier de la Mairie de Soussans et du Département de Gironde.</p>
        <div class="support-images">
          <img src="../assets/img/just_img/departement.png" alt="Département de Gironde" class="logo-departement">
          <img src="../assets/img/just_img/mairie.png" alt="Mairie de Soussans" class="logo-mairie">
        </div>
      </div>
    </section>

    <section class="team-section">
      <h2>Notre Équipe</h2>
      <div class="bureau">
        <h3>Bureau Actuel</h3>
        <div class="bureau-grid">
          <div class="member-card">
            <img class="member-info" src="../assets/img/asso/Steph.png" alt="Stéphane Liège">
            <h3>Stéphane Liège</h3>
            <p class="role">Président, Soussans</p>
          </div>
          <div class="member-card">
            <img class="member-info" src="../assets/img/asso/Sylvain.png" alt="Sylvain Dussap">
            <h3>Sylvain Dussap</h3>
            <p class="role">Secrétaire, Margaux-Cantenac</p>
          </div>
          <div class="member-card">
            <img class="member-info" src="../assets/img/asso/Coralie.png" alt="Coralie Bardinet">
            <h3>Coralie Bardinet</h3>
            <p class="role">Trésorière, Macau</p>
          </div>
          <div class="member-card">
            <img class="member-info" src="../assets/img/asso/Pierrot.png" alt="Jean-Pierre Crouail">
            <h3>Jean-Pierre Crouail</h3>
            <p class="role">Président Adjoint, Soussans</p>
          </div>
          <div class="member-card">
            <img class="member-info" src="../assets/img/asso/JC.png" alt="Jérôme Rampnoux">
            <h3>Jérôme Rampnoux</h3>
            <p class="role">Trésorier Adjoint, Soussans</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h2>Contactez-Nous</h2>
      <p>Pour toute question ou information supplémentaire, n'hésitez pas à nous contacter.</p>
      <div class="contact-info">
        <p><strong>Adresse</strong> : 16, route de Pauillac, Soussans, 33460</p>
        <p><strong>Email</strong> : medocennotes@gmail.com</p>
        <p><strong>Téléphone</strong> : 07 80 18 83 16 (Jason Boutin)</p>
      </div>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom *</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Votre nom" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail *</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Votre e-mail" required>
        </div>
        <div class="form-group">
          <label for="phone">Téléphone</label>
          <input type="tel" id="phone" v-model="formData.phone" placeholder="Votre téléphone">
        </div>
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" v-model="formData.message" placeholder="Rédigez votre message ici..." required></textarea>
        </div>
        <button type="submit" :disabled="isSending">
          {{ isSending ? 'Envoi en cours...' : 'ENVOYER' }}
        </button>
        <div v-if="sendStatus" class="status-message" :class="{ 'success': sendStatus.success, 'error': !sendStatus.success }">
          {{ sendStatus.message }}
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AssociationPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      isSending: false,
      sendStatus: null
    };
  },
  methods: {
    async submitForm() {
      this.isSending = true;
      this.sendStatus = null;
      
      try {
        const response = await fetch('http://localhost:3001/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Erreur lors de l\'envoi du message');
        }

        this.sendStatus = { 
          success: true, 
          message: data.message || 'Message envoyé avec succès!' 
        };
        this.formData = { name: '', email: '', phone: '', message: '' };
      } catch (error) {
        console.error('Erreur:', error);
        this.sendStatus = { 
          success: false, 
          message: error.message || 'Une erreur est survenue. Veuillez réessayer plus tard.' 
        };
      } finally {
        this.isSending = false;
      }
    }
  }
}
</script>

<style scoped>
.association-page {
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

h1, h2, h3 {
  color: #2c3e50;
}

.intro-text {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 40px;
}

.mission-section, .team-section, .contact-section {
  margin-bottom: 40px;
}

.mission-list {
  list-style-type: disc;
  margin-left: 20px;
  line-height: 1.6;
}

.support-section {
  text-align: center;
  margin-top: 30px;
}

.thanks {
  font-size: 1.1em;
  margin-bottom: 20px;
}

.support-images {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
}

.support-images img {
  max-height: 80px;
  width: auto;
  object-fit: contain;
}

.bureau-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.member-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.member-card h3 {
  margin: 10px 0 5px;
  font-size: 1.2em;
  color: #2c3e50;
}

.member-card .role {
  margin: 0;
  font-size: 0.9em;
  color: #666;
}

.member-info {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

.contact-info {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

button:hover {
  background-color: #34495e;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.status-message {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.status-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

label[required]::after {
  content: " *";
  color: #e74c3c;
}
</style>