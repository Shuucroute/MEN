<template>
  <div class="music-school-page">
    <div class="hero-section">
      <h1>L’École de Musique de Soussans</h1>
      <p class="subtitle">Un établissement culturel dédié à l’enseignement musical et à l’animation culturelle locale.
      </p>
    </div>

    <section class="about-section">
      <h2>À Propos de l'École</h2>
      <p>
        L'école municipale de musique de Soussans est un établissement culturel de la commune de Soussans, géré sous le
        statut associatif "loi 1901". Elle est animée par une équipe pédagogique passionnée et gérée par une équipe
        associative dévouée.
      </p>
      <p>
        Nous proposons des cours pour tous les âges et tous les niveaux, couvrant une variété d'instruments : guitare
        (acoustique et électrique), piano, chant, batterie, basse et ukulélé.
      </p>
      <p>
        Au-delà de l'apprentissage de la musique, notre école vise à enrichir la vie culturelle et musicale locale à
        travers des concerts, des scènes ouvertes et des animations musicales.
      </p>
    </section>

    <section class="features-section">
<<<<<<< HEAD
      <router-link to="/teachers">
        <div class="feature-card">
          <img src="../assets/img/just_img/teachers.png" alt="Professeurs" class="feature-icon">
          <h3>Les Professeurs</h3>
          <p>Une équipe pédagogique qualifiée et passionnée pour vous guider dans votre apprentissage musical.</p>
        </div>
      </router-link>
      <router-link to="/courses">
        <div class="feature-card">
          <img src="../assets/img/just_img/courses.png" alt="Cours" class="feature-icon clickable-icon">
          <h3>Les Cours</h3>
          <p>Des cours adaptés à tous les niveaux et tous les âges, pour découvrir ou perfectionner votre pratique
            musicale.</p>
        </div>
      </router-link>
      <router-link to="stages">
        <div class="feature-card">
          <img src="../assets/img/just_img/stages.jpg" alt="Stages" class="feature-icon">
          <h3>Les Stages</h3>
          <p>Des stages intensifs pour approfondir vos compétences et explorer de nouveaux horizons musicaux.</p>
        </div>
=======
      <router-link to="/teachers" class="feature-card">
        <img src="../assets/img/just_img/teachers.png" alt="Professeurs" class="feature-icon">
        <h3>Les Professeurs</h3>
        <p>Une équipe pédagogique qualifiée et passionnée pour vous guider dans votre apprentissage musical.</p>
      </router-link>

      <router-link to="/courses" class="feature-card">
        <img src="../assets/img/just_img/courses.png" alt="Cours" class="feature-icon">
        <h3>Les Cours</h3>
        <p>Des cours adaptés à tous les niveaux et tous les âges, pour découvrir ou perfectionner votre pratique musicale.</p>
      </router-link>

      <router-link to="/stages" class="feature-card">
        <img src="../assets/img/just_img/stages.jpg" alt="Stages" class="feature-icon">
        <h3>Les Stages</h3>
        <p>Des stages intensifs pour approfondir vos compétences et explorer de nouveaux horizons musicaux.</p>
>>>>>>> 88c4215cf97a04517ccbce77f580cf2797a70a18
      </router-link>
    </section>

    <section class="cta-section">
      <h2>Rejoignez-Nous !</h2>
      <p>Que vous soyez débutant ou musicien confirmé, l'école de musique de Soussans vous accueille pour partager votre
        passion.</p>
      <button class="cta-button">Inscrivez-vous dès maintenant</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MusicSchoolPage',
};
</script>

<style scoped>
.music-school-page {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

.hero-section {
  text-align: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 40px;
}

.hero-section h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.hero-section .subtitle {
  font-size: 1.2em;
  color: #666;
}

.about-section {
  margin-bottom: 40px;
}

.about-section h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.about-section p {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
}

.features-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
}

.feature-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.clickable-icon {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.clickable-icon:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.feature-card h3 {
  font-size: 1.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 1em;
  color: #666;
}

.cta-section {
  text-align: center;
  padding: 40px 20px;
  background-color: #2c3e50;
  border-radius: 10px;
  color: white;
}

.cta-section h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.1em;
  margin-bottom: 20px;
}

.cta-button {
  padding: 15px 30px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .features-section {
    flex-direction: column;
  }
}
</style>