<template>
  <div class="team-page">
    <header class="page-header">
      <h1>L'équipe pédagogique</h1>
      <p class="lead">Les activités de l'école de musique Médoc en Notes sont coordonnées par notre équipe de
        professeurs passionnés.</p>
    </header>

    <div class="director-card">
      <div class="director-image">
        <img :src="director.image" :alt="director.name">
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
          <img :src="member.image" :alt="member.name">
        </div>
        <div class="member-info">
          <h3>{{ member.name }}</h3>
          <div class="specialties">
            <span v-for="specialty in member.specialties" :key="specialty" class="specialty-badge">{{ specialty }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teachersData from '../json/teachers.json'

import JasonImg from '../assets/img/prof/Jason.png'
import IsmaImg from '../assets/img/prof/Isma.png'
import ThomasImg from '../assets/img/prof/Thomas.png'
import LaurentImg from '../assets/img/prof/Laurent.png'

export default {
  data() {
    const imageMap = {
      "Prof/Jason.png": JasonImg,
      "Isma.png": IsmaImg,
      "Thomas.png": ThomasImg,
      "Laurent.png": LaurentImg
    }

    return {
      director: {
        ...teachersData.director,
        image: imageMap[teachersData.director.image]
      },
      teamMembers: teachersData.teamMembers.map(member => ({
        ...member,
        image: imageMap[member.image]
      }))
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

.position {
  color: #636e72;
  font-style: italic;
  margin-bottom: 1rem;
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