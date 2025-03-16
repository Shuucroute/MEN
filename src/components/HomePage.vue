<script setup lang="ts">
import bgImage from '../assets/img/logo_MEN_2.jpg';
</script>

<template>
  <div class="relative w-full h-screen">
    <!-- Hero Section -->
    <div 
      class="relative h-[50vh] w-full bg-cover bg-center flex items-center justify-center text-white text-center px-4" 
      :style="{ backgroundImage: `url(${bgImage})` }">
      <h1 class="text-4xl md:text-5xl font-bold drop-shadow-lg">
        Apprendre la musique en s'amusant
      </h1>
    </div>
    
    <!-- Section Contenu -->
    <div class="py-16 px-8 bg-gray-100 text-center">
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-lg font-bold">Une asso à but non lucratif</h2>
          <p class="text-sm px-4">Méloc en Nous est une association qui...</p>
        </div>
        <div>
          <h2 class="text-lg font-bold">La musique pour tous</h2>
          <p class="text-sm px-4">Ouvert à tous, dès 4 ans, l'école propose...</p>
        </div>
        <div>
          <h2 class="text-lg font-bold">Le partage de la musique</h2>
          <p class="text-sm px-4">Méloc en Nous organise des concerts...</p>
        </div>
      </div>
      <div class="mt-8">
        <button class="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-4 py-2 rounded-lg">
          LES COURS
        </button>
        <button class="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-4 py-2 rounded-lg ml-4">
          INSCRIPTIONS
        </button>
      </div>
    </div>
    
    <!-- Section Actu -->
    <div class="py-16 px-8 text-center">
      <h2 class="text-xl font-bold">Actu - Feuille de route</h2>
      <p class="italic text-gray-600">
        Suivez-nous sur 
        <a href="#" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Facebook</a> ou 
        <a href="#" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
      <ul class="mt-4 text-sm text-gray-700">
        <li>5 juillet 2024 – Scène ouverte et animation musicale...</li>
        <li>14 août 2024 – Concert...</li>
        <li>Et bien plus encore...</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

@keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}

body {
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  font-family: 'Lato', sans-serif;
}

* {
  box-sizing: border-box;
  scrollbar-color: transparent transparent; /* thumb and track color */
  scrollbar-width: 0px;
}

*::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

* {
  -ms-overflow-style: none;
}

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;
}

.carousel__slide:nth-child(even) {
  background-color: #99f;
}

.carousel__slide:before {
  content: counter(item);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-40%,70px);
  color: #fff;
  font-size: 2em;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}

.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform 0.1s;
}

.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  position: absolute;
  top: 0;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
}

.carousel::before,
.carousel__prev {
  left: -1rem;
}

.carousel::after,
.carousel__next {
  right: -1rem;
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

.carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}

</style>
