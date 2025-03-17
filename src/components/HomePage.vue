<template>
  <div class="container">
    <!-- Carrousel -->
    <div class="carousel">
      <button @click="prevSlide" class="prev">&#10094;</button>
      <img :src="images[currentIndex]" alt="Carrousel image">
      <button @click="nextSlide" class="next">&#10095;</button>
    </div>

    <!-- Section Contenu -->
    <section class="content">
      <div class="content-grid">
        <div v-for="(section, key) in content.sections" :key="key" class="content-box">
          <h2 class="content-title">{{ section.title }}</h2>
          <p>{{ section.content }}</p>
        </div>
      </div>
      <div class="buttons">
        <button>{{ content.buttons.courses }}</button>
        <button>{{ content.buttons.inscriptions }}</button>
      </div>
    </section>

    <!-- Section Actu -->
    <section class="actu">
      <h1 class="feuille_route">{{ content.actu.title }}</h1>
      <h3 class="reseaux">{{ content.actu.social }}
        <a href="https://www.facebook.com/MedocEnNotes?locale=fr_FR">Facebook</a>,
        <a href="https://www.instagram.com/medocennotes/">Instagram</a> et
        <a href="https://www.youtube.com/@medocennotes">YouTube</a> !
      </h3>
      <h2 class="session-title">{{ content.actu.title2 }}</h2>
      <ul class="session-list">
        <li v-for="(event, index) in content.actu.events" :key="index">• {{ event }}</li>
      </ul>
    </section>

    <!-- Profil Président -->
    <div class="president-section">
      <div class="profile-photo">
        <img src="../assets/img/asso/Steph.png" alt="Profile photo de Stéphane">
      </div>
      <div class="president-text">
        <h2>{{ content.president.title }}</h2>
        <p>{{ content.president.content }}</p>
        <p class="end">{{ content.president.end }}</p>
        <p class="signature">{{ content.president.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import content from '../json/text.json';
import image1 from '../assets/img/just_img/image_1.jpg';
import image2 from '../assets/img/just_img/image_2.jpg';
import image3 from '../assets/img/just_img/image_3.jpg';
import image4 from '../assets/img/just_img/image_4.jpg';

const images = [image1, image2, image3, image4];
const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>

<style scoped>
.container {
  margin-top: 70px;
  width: 100%;
  text-align: center;
}

.content {
  padding: 2rem;
}

.content-title {
  color: #793e4d;
}

.content-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.content-box {
  padding: 1.5rem;
  border-radius: 15px;
  max-width: 300px;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.buttons {
  margin-top: 2rem;
}

.buttons button {
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #663d47;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 25px;
  font-size: 1.1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.buttons button:hover {
  background-color: #e64a19;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  position: relative;
}

.carousel img {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 20px;
  transition: opacity 0.5s ease-in-out;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.actu {
  margin-left: -15%;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.feuille_route {
  font-size: 2rem;
  color: #793e4d;
  margin-bottom: 0;
  margin-left: -7%;
}

.reseaux {
  font-size: 1.2rem;
  color: #793e4d;
  margin-top: 0;
}

.president-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.profile-photo img {
  max-width: 160px;
  border-radius: 50%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.7);
}

.president-text {
  max-width: 500px;
  text-align: center;
  margin-left: 1.5rem;
}

.end {
  margin-top: 15%;
  margin-bottom: 0rem;
  margin-left: -85%;
}

.president-text .signature {
  font-weight: bold;
  margin-top: 0;
  margin-left: -75%;
}

.session-title {
  margin-bottom: 0;
  margin-left: -15%;
}

.session-list {
  color: #6e6e6e;
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 0 auto;
  max-width: 400px;
}

.session-list li {
  font-size: 1.1rem;
  margin: 5px 0;
  padding-left: 10px;
}
</style>
