<script setup>
  import navbar from "./views/navbar.vue"
  import home from "./views/home.vue"
  import work from "./views/work.vue"
  import aboutme from "./views/aboutme.vue"
  import Skillset from "./views/Skillset.vue"
  import Experience from "./views/Experience.vue"
  import Footer from "./views/footer.vue"
  import Contact from "./views/contact.vue"
</script>

<template>
  <div class="app-container">
    <navbar />
    <main class="main-content">
      <home />
      <aboutme />
      <Skillset />
       <work />
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