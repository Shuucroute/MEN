<template>
  <div class="pedagogical-team-page">
    <div class="hero-section">
      <h1>L’équipe pédagogique</h1>
      <p class="subtitle">Découvrez notre équipe de professeurs passionnés et qualifiés.</p>
    </div>

    <section class="team-section">
      <div class="team-intro">
        <p>
          Les activités de l’école de musique Médoc en Notes sont coordonnées par <strong>Jason Boutin</strong>,
          directeur pédagogique.
        </p>
      </div>

      <div class="team-members">
        <div class="team-member" v-for="(teacher, index) in teachers" :key="index">
          <div class="member-image">
            <img :src="teacher.image" :alt="teacher.name" class="profile-pic">
          </div>
          <div class="member-details">
            <h3>{{ teacher.name }}</h3>
            <div class="instruments">
              <div class="instrument-item" v-for="(instrument, idx) in teacher.instruments" :key="idx">
                <span class="instrument-icon">{{ instrument.icon }}</span> 
                {{ instrument.name }} 
                <span class="checkbox">{{ instrument.checked ? '[x]' : '[ ]' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PedagogicalTeamPage',
  data() {
    return {
      teachers: [
        {
          name: 'Ismaëlle Mercier',
          image: new URL('../assets/img/teachers/Isma.png', import.meta.url).href,
          instruments: [
            { name: 'Piano', icon: '🎹', checked: false },
            { name: 'Ukulélé', icon: '🎸', checked: true },
            { name: 'Éveil musical', icon: '🎵', checked: false },
            { name: 'Initiation', icon: '👶', checked: false },
            { name: 'Atelier', icon: '🎶', checked: false },
          ],
        },
        {
          name: 'Jason Boutin',
          image: new URL('../assets/img/teachers/Jason.png', import.meta.url).href,
          instruments: [
            { name: 'Guitare acoustique / électrique', icon: '🎸', checked: true },
            { name: 'Chant', icon: '🎤', checked: false },
            { name: 'Batterie', icon: '🥁', checked: true },
            { name: 'Ukulélé', icon: '🎸', checked: true },
            { name: 'Atelier', icon: '🎶', checked: false },
            { name: 'Chorale', icon: '🎵', checked: false },
          ],
        },
        {
          name: 'Thomas Guillard',
          image: new URL('../assets/img/teachers/Thomas.png', import.meta.url).href,
          instruments: [
            { name: 'Basse', icon: '🎸', checked: true },
            { name: 'Guitare acoustique / électrique', icon: '🎸', checked: true },
            { name: 'Banjo', icon: '🪕', checked: true },
            { name: 'Mandoline', icon: '🎶', checked: true },
            { name: 'Atelier', icon: '🎵', checked: true },
          ],
        },
        {
          name: 'Laurent Dolnet',
          image: new URL('../assets/img/teachers/Laurent.png', import.meta.url).href,
          instruments: [
            { name: 'Batterie', icon: '🥁', checked: true },
            { name: 'Atelier', icon: '🎶', checked: true },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.pedagogical-team-page {
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

.team-members {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.team-member {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1 1 calc(25% - 40px);
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #2c3e50;
}
</style>
