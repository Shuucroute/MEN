<template>
<<<<<<< HEAD
  <div class="team-page">
    <header class="page-header">
      <h1>L'équipe pédagogique</h1>
      <p class="lead">Les activités de l'école de musique Médoc en Notes sont coordonnées par notre équipe de professeurs passionnés.</p>
    </header>

    <div class="director-card">
      <div class="director-image">
        <img :src="getImageUrl(director.image)" :alt="director.name">
      </div>
      <div class="director-info">
        <h2>{{ director.name }}</h2>
        <p class="position">Directeur pédagogique</p>
        <div class="specialties">
          <span v-for="specialty in director.specialties" :key="specialty" class="specialty-badge">{{ specialty }}</span>
        </div>
      </div>
    </div>

    <div class="team-grid">
      <div class="team-member" v-for="member in teamMembers" :key="member.name">
        <div class="member-image">
          <img :src="getImageUrl(member.image)" :alt="member.name">
        </div>
        <div class="member-info">
          <h3>{{ member.name }}</h3>
          <div class="specialties">
            <span v-for="specialty in member.specialties" :key="specialty" class="specialty-badge">{{ specialty }}</span>
          </div>
        </div>
      </div>
    </div>
=======
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
>>>>>>> 88c4215cf97a04517ccbce77f580cf2797a70a18
  </div>
</template>

<script>
<<<<<<< HEAD
import teachersData from '../json/teachers.json'

export default {
  data() {
    return teachersData
  },
  methods: {
    getImageUrl(imagePath) {
      return new URL(`../assets/${imagePath}`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
.team-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Montserrat', sans-serif;
  color: #2d3436;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.8rem;
  color: #6c5ce7;
  margin-bottom: 1rem;
  font-weight: 700;
}

.page-header .lead {
  font-size: 1.3rem;
  color: #636e72;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.director-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(108, 92, 231, 0.1);
  border-left: 5px solid #6c5ce7;
}

.director-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2.5rem;
  border: 5px solid #f5f6fa;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.director-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.member-image {
  height: 250px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-member:hover .member-image img {
  transform: scale(1.05);
}

.member-info {
  padding: 1.8rem;
}

.member-info h3 {
  font-size: 1.6rem;
  color: #2d3436;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.specialties {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.specialty-badge {
  background: #f5f6fa;
  color: #6c5ce7;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.team-member:hover .specialty-badge {
  background: #6c5ce7;
  color: white;
}

@media (max-width: 768px) {
  .director-card {
    flex-direction: column;
    text-align: center;
  }
  
  .director-image {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
=======
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
>>>>>>> 88c4215cf97a04517ccbce77f580cf2797a70a18
