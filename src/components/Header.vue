<template>
  <Header :class="['header', { 'header-enter': isMounted }]">
    <!-- Image conteneur -->
    <div class="logo-container">
      <img src="../assets/img/just_img/logo.png" alt="logo" />
    </div>
    
    <!-- Navigation -->
    <nav>
      <router-link to="/" class="nav-link" active-class="active-link">Accueil</router-link>
      <router-link to="/school" class="nav-link" active-class="active-link">L'école</router-link>
      <router-link to="/inscription" class="nav-link" active-class="active-link">Inscriptions</router-link>
      <router-link to="/asso" class="nav-link" active-class="active-link">L'asso</router-link>
    </nav>
  </Header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>

<style>
/* Style pour l'image (logo) */
.logo-container img {
  height: 80px;
  max-width: 150px;
  border-radius: 50%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.7);
  margin-top: -20px; 
  margin-left: 300%;
}

/* Style du header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 30px;
  color: #fff;
  position: absolute;
  width: 100%;
  z-index: 2;
  opacity: 1;
  font-size: 1.2rem;
}

/* Navigation */
nav {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  margin-right: 15%;
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s, transform 0.3s;
}

.nav-link:hover {
  color: #ff9800;
  transform: scale(1.1);
}

.nav-link:not(.active-link) {
  color: #b0b0b0;
}

.nav-link.active-link {
  color: #333;
  font-weight: bold;
}

/* Trait au-dessus du lien actif */
.nav-link.active-link::after {
  content: '';
  position: absolute;
  top: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #000;
  transform: scaleX(1);
}

/* Effet au survol */
.nav-link::after {
  content: '';
  position: absolute;
  top: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>
