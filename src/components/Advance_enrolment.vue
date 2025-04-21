<template>
  <div class="container">
    <h2>Pré-inscription - Médoc en Notes</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Nom</label>
        <input type="text" v-model="form.nom" />
      </div>
      <div>
        <label>Prénom</label>
        <input type="text" v-model="form.prenom" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="form.email" />
      </div>
      <div>
        <label>Téléphone</label>
        <input type="text" v-model="form.telephone" />
      </div>
      <div>
        <label>Adresse</label>
        <input type="text" v-model="form.adresse" />
      </div>
      <div>
        <label>Instrument souhaité</label>
        <select v-model="form.instrument">
          <option value="">-- Sélectionner --</option>
          <option>Basse</option>
          <option>Guitare</option>
          <option>Piano</option>
          <option>Batterie</option>
        </select>
      </div>
      <div>
        <input type="checkbox" id="reduction" v-model="form.reduction" />
        <label for="reduction">Je suis potentiellement éligible à une réduction</label>
      </div>
      <button type="submit">Envoyer la pré-inscription</button>
      <p v-if="error" style="color: red;">Erreur : Veuillez remplir tous les champs obligatoires</p>
      <p v-if="success" style="color: green;">Pré-inscription envoyée avec succès !</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        instrument: '',
        reduction: false,
        type: 'pdf' // ⬅️ C’est ce champ qui dit au serveur d’envoyer un PDF
      },
      error: false,
      success: false,
    };
  },
  methods: {
    async handleSubmit() {
      const { nom, prenom, email, telephone, adresse, instrument } = this.form;
      if (!nom || !prenom || !email || !telephone || !adresse || !instrument) {
        this.error = true;
        this.success = false;
        return;
      }

      this.error = false;

      try {
        const response = await fetch('http://localhost:3001/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form),
        });

        const data = await response.json();
        if (response.ok) {
          this.success = true;
          console.log('Réponse serveur :', data);
        } else {
          console.error('Erreur serveur :', data.message);
        }
      } catch (err) {
        console.error('Erreur réseau :', err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
}
input,
select {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}
button {
  background-color: #3399ff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
