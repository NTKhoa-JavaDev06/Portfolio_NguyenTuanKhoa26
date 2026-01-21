<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container d-flex align-items-center justify-content-between">
      <a class="navbar-brand m-0 p-0 d-flex align-items-center" href="#Home">
        <img src="../img/chukyfinal.png" class="nav-logo" alt="Logo">
      </a>

      <button class="navbar-toggler border-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <div class="hamburger-box">
          <span class="toggler-icon"></span>
        </div>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item"><a class="nav-link" href="#Home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#About">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#Skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#Work">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#Experience">Experience</a></li>
          <li class="nav-item mt-3 mt-lg-0 ms-lg-4">
            <a class="nav-link btn-action" href="#Contact">Hire Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isScrolled = ref(false);
const handleScroll = () => { isScrolled.value = window.scrollY > 50; };
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  const menu = document.getElementById('navbarNav');
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      if (window.innerWidth < 992 && menu.classList.contains('show')) {
        const bs = bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu);
        bs.hide();
      }
    });
  });
});
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
.navbar {
  --red: #e74c3c;
  --dark: #1a1a1a;
  transition: 0.3s ease;
  padding: 20px 0;
}
.navbar-scrolled {
  padding: 10px 0;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border-bottom: 2px solid var(--red);
}
.nav-logo { width: 130px; transition: 0.3s; }
.nav-link {
  color: var(--dark) !important;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
.btn-action {
  border: 2px solid var(--dark) !important;
  padding: 8px 25px !important;
}
@media (max-width: 991px) {
  .navbar { background: white; padding: 12px 0; }
  .nav-logo { width: 90px; }
  .hamburger-box { width: 24px; height: 18px; display: flex; align-items: center; }
  .toggler-icon, .toggler-icon::before, .toggler-icon::after {
    width: 100%; height: 2px; background: var(--dark); position: absolute; transition: 0.3s;
  }
  .toggler-icon::before { content: ''; top: -7px; left: 0; }
  .toggler-icon::after { content: ''; bottom: -7px; left: 0; }
  .navbar-collapse {
    background: white; margin-top: 15px; padding: 20px;
    border-radius: 10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
}
</style>