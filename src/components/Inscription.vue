<template>
    <div class="inscriptions-page">
      <h1>Inscriptions</h1>
      <p>
        L’inscription aux cours passe par une étape de pré-inscription de manière à vérifier les possibilités (effectifs et horaire des cours, niveaux requis), les données d’inscription, les montants et modes de paiement.
      </p>
      <p>
        Lors de la pré-inscription, vous indiquerez vos choix de cours pour vous, votre conjoint/partenaire et/ou vos enfants, ainsi que votre éventuelle éligibilité pour des tarifs réduits.
      </p>
  
      <div class="note-section">
        <h2>A NOTER</h2>
        <ul>
          <li>Les inscriptions aux cours ne sont possibles que pour les adhérents de l’association Médoc en Notes (cotisation annuelle de 80 €).</li>
          <li><em>Les frais d’adhésion à l’association servent à l’achat et l’entretien des instruments et équipements nécessaires au déroulement des activités de l’école (cours, ateliers, prestations scéniques, communications).</em></li>
          <li>Les frais d’inscriptions sont dûs pour l’année complète (30 séances) et sont non remboursables, sauf cas de force majeure (cf réglement intérieur de l’association).</li>
          <li><em>Les frais d’inscription aux cours servent à rémunérer les enseignants de l’école.</em></li>
        </ul>
      </div>
  
      <div class="pre-inscription-section">
        <h2>Pré-inscription</h2>
        <form @submit.prevent="submitPreInscription">
          <div class="form-group">
            <label for="course-selection">Choix de cours</label>
            <select id="course-selection" v-model="selectedCourse">
              <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="discount-eligibility">Éligibilité pour des tarifs réduits</label>
            <input type="checkbox" id="discount-eligibility" v-model="discountEligibility">
          </div>
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courses: [
          { id: 1, name: 'Cours de piano' },
          { id: 2, name: 'Cours de guitare' },
          { id: 3, name: 'Cours de violon' }
        ],
        selectedCourse: null,
        discountEligibility: false
      };
    },
    methods: {
      submitPreInscription() {
        // Handle form submission
      }
    }
  };
  </script>
  
  <style scoped>
  .inscriptions-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1, h2 {
    color: #2c3e50;
  }
  
  .note-section {
    background-color: #f9f9f9;
    padding: 15px;
    border-left: 5px solid #3498db;
    margin-bottom: 20px;
  }
  
  .note-section ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .pre-inscription-section {
    background-color: #ecf0f1;
    padding: 15px;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  select, input[type="checkbox"] {
    margin-top: 5px;
  }
  
  button {
    background-color: #3498db;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>