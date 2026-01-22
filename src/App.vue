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
      <Skillset />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<style>
/* Sử dụng thẻ style không có scoped để thiết lập cho toàn bộ trang */
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 100px; /* Giúp khi bấm menu, trang cuộn đến đúng vị trí không bị che */
}

.main-content {
  padding-top: 80px; 
}

@media (max-width: 991px) {
  .main-content {
    padding-top: 60px; 
  }
}
</style>