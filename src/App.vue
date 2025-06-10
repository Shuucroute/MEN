<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/header.vue';
import Footer from "@/components/footer.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
}

* {
  box-sizing: border-box;
}

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
