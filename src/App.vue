<script setup>
  import Navbar from "./views/Navbar.vue"
  import Home from "./views/Home.vue"
  import Work from "./views/Work.vue"
  import Aboutme from "./views/Aboutme.vue"
  import Skillset from "./views/Skillset.vue"
  import Experience from "./views/Experience.vue"
  import Footer from "./views/Footer.vue"
  import Contact from "./views/Contact.vue"
</script>

<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <Home />
      <Aboutme />
      <Skillset /><Work />
      <Experience />
      <Contact />
      <Footer />

    </main>
  
  </div>
</template>

<style scoped>
.main-content {
  padding-top: 80px; 
}

@media (max-width: 991px) {
  .main-content {
    padding-top: 60px; 
  }
}
section {
  padding: 100px 0; 
}

section[id] {
  scroll-margin-top: 120px; 
}
html {
  scroll-behavior: smooth;
}
</style>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false); // Dòng này bắt buộc phải có để hết lỗi đỏ

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>