<template>
  <div class="music-courses">
    <header class="header">
      <h1>Les cours de musique</h1>
      <p class="subtitle">20 heures de cours réparties sur l'année</p>
    </header>

    <div class="pricing-notice">
      <p>Tarifs publics et réduits disponibles (adhésion SDS ou associations Ménac/Nora). Réduction familiale : -50€ à
        partir du 3ème enfant.</p>
    </div>

    <div class="course-cards">
      <!-- éveil Musical -->
      <div class="course-card">
        <h2>Eveil Musical</h2>
        <div class="course-details">
          <p><strong>Public :</strong> Enfants scolarisés en Moyenne-Section et Grande Section</p>
          <p><strong>Durée :</strong> Séances de 45 minutes  hebdomadaire</p>
          <p><strong>Programme :</strong> Découverte musicale progressive sur 10 cycles</p>
          <ul class="program-list">
            <li>Découverte du cours</li>
            <li>Découverte du 9 janvier</li>
            <li>Apprentissage de chants et comptines du Morais</li>
            <li>Jeux musicaux</li>
            <li>Culture musicale</li>
          </ul>
        </div>
        <div class="price-tag">200 €</div>
      </div>

      <!-- Initiation -->
      <div class="course-card">
        <h2>Initiation</h2>
        <div class="course-details">
          <p><strong>Public :</strong> Enfants en CP et CE1 (accès direct en 1ère année)</p>
          <p><strong>Durée :</strong> Séances de 45 minutes hebdomadaire</p>
          <p><strong>Objectifs :</strong></p>
          <ul class="program-list">
            <li>Découverte des familles d'instruments</li>
            <li>Choix d'un instrument principal</li>
            <li>Renforcer leur culture musicale</li>
            <li>Pratique du chant et des percussions</li>
          </ul>
        </div>
        <div class="price-tag">200 €</div>
      </div>

      <!-- Cours individuels/collectifs -->
      <div class="course-card highlight">
        <h2>Cours individuels ou collectifs</h2>
        <div class="course-details">
          <p><strong>Formules :</strong></p>
          <ul class="program-list">
            <li><strong>Individuel :</strong> 30 minutes</li>
            <li><strong>Collectif :</strong> 1 heure</li>
          </ul>
          <p>Apprentissage approfondi d'un instrument spécifique avec suivi personnalisé.</p>
        </div>
        <div class="price-options">
          <div class="price-option">
            <span class="price-label">Individuel :</span>
            <span class="price-value">420 €</span>
            <span class="price-note">+ 30€ (sous condition)</span>
          </div>
          <div class="price-option">
            <span class="price-label">Collectif :</span>
            <span class="price-value">330 €</span>
            <span class="price-note">+ 30€ (sous condition)</span>
          </div>
        </div>
      </div>

      <!-- Ateliers multi-instruments -->
      <div class="course-card">
        <h2>Ateliers multi-instruments</h2>
        <div class="course-details">
          <p><strong>Public :</strong> Groupes et individuels souhaitant découvrir plusieurs instruments</p>
          <p><strong>Durée :</strong> Séances de 60 minutes</p>
          <p>Expérience de jeu en ensemble et découverte instrumentale sur 80 à 90 œuvres travaillées.</p>
        </div>
        <div class="price-tag">40 € (option)</div>
      </div>

      <!-- Clarande -->
      <div class="course-card">
        <h2>Chorale</h2>
        <div class="course-details">
          <p>Ateliers pour chanteurs et instrumentistes avancés. Séances de 60 minutes.</p>
          <p>Intégration dans des projets musicaux collectifs avec préparation aux examens.</p>
        </div>
        <div class="price-tag">40 € (option)</div>
      </div>
    </div>

    <!-- Ajout du composant MusicCalendar -->
    <MusicCalendar />
  </div>
</template>

<script>
// Import du composant
import MusicCalendar from './MusicCalendar.vue';

export default {
  name: 'MusicCourses',
  components: {
    MusicCalendar
  }
}
</script>

<style scoped>
.music-courses {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  margin-top: 3%;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-top: 3%;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.pricing-notice {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
  border-left: 4px solid #3498db;
}

.course-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.course-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
}

.course-card.highlight {
  border: 2px solid #3498db;
}

.course-card h2 {
  color: #2c3e50;
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
}

.course-details {
  margin-bottom: 1.5rem;
}

.program-list {
  padding-left: 1.2rem;
}

.program-list li {
  margin-bottom: 0.5rem;
  list-style-type: circle;
}

.price-tag {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  font-weight: bold;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.price-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price-option {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.price-label {
  font-weight: bold;
}

.price-value {
  color: #3498db;
  font-weight: bold;
}

.price-note {
  font-size: 0.9rem;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .course-cards {
    grid-template-columns: 1fr;
  }
}
</style>