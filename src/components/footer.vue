<template>
  <footer class="foot">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/img/just_img/logo.png" alt="logo" />
      </div>

      <!-- Réseaux sociaux -->
      <div class="social-icons">
        <a href="https://www.facebook.com/MedocEnNotes?locale=fr_FR" target="_blank">
          <img src="../assets/img/reseaux_sociaux/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/medocennotes/" target="_blank">
          <img src="../assets/img/reseaux_sociaux/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@medocennotes" target="_blank">
          <img src="../assets/img/reseaux_sociaux/youtube.png" alt="YouTube" />
        </a>
      </div>

      <!-- Informations de contact -->
      <div class="contact">
        <h3>CONTACT</h3>
        <p>16, route de Pauillac</p>
        <p>33460 Soussans</p>
        <p><a href="mailto:medocennotes@gmail.com">medocennotes@gmail.com</a></p>
        <p>T : 07 80 18 83 16 (Jason Boutin)</p>
      </div>

      <!-- Mentions légales -->
      <div class="legal">
        <a href="#">Mentions légales</a>
        <a href="#">Politique en matière de cookies</a>
        <a href="#">Politique de confidentialité</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  background: #f8f8f8;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  flex-wrap: wrap;
}

.logo img {
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.7);
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons img {
  height: 60px;
  transition: transform 0.3s ease-in-out;
}

.social-icons img:hover {
  transform: scale(1.1);
}

.contact {
  text-align: left;
}

.contact h3 {
  font-weight: bold;
  margin-bottom: 10px;
  color: #663d47;
}

.contact a {
  text-decoration: underline;
  color: #000000;
}

.legal {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.legal a {
  text-decoration: none;
  margin-bottom: 5px;
}

.legal a:hover {
  text-decoration: underline;
}
</style>
