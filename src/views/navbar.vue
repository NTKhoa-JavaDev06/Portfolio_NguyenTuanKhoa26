<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#home">
        <img src="../img/chukyfinal.png" style="width: 150px;" alt="Signature Logo">
      </a>

      <button 
        class="navbar-toggler custom-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span class="toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#Home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Skills">Skills</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#Work">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Experience">Experience</a>
          </li>
         
          <li class="nav-item ms-lg-4">
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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Đóng navbar mobile sau khi chọn link
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('navbarNav');
  
  navLinks.forEach((l) => {
    l.addEventListener('click', () => {
      if (window.innerWidth < 992) {
       
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        bsCollapse.hide();
      }
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Montserrat:wght@400;600;800&display=swap');

.navbar {
  --primary-red: #e74c3c;
  --bg-white: #ffffff;
  --text-dark: #1a1a1a;
  
  font-family: 'Montserrat', sans-serif;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 25px 0;
  background-color: transparent; /* Ban đầu trong suốt */
}

.navbar-scrolled {
  padding: 12px 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-bottom: 2px solid var(--primary-red);
}

.nav-link {
  color: var(--text-dark) !important;
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0 10px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Hiệu ứng gạch chân khi hover cho chuyên nghiệp */
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-red);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--primary-red) !important;
}

/* Nút Hire Me nổi bật */
.btn-action {
  border: 2px solid var(--text-dark) !important;
  background: transparent;
  padding: 10px 25px !important;
  font-family: 'Space Mono', monospace; /* Font kiểu lập trình viên */
}

.btn-action:hover {
  background: var(--text-dark) !important;
  color: #fff !important;
  transform: translateY(-3px);
}

.btn-action::after { display: none; } /* Bỏ gạch chân cho nút action */

/* Hamburger Menu Icon */
.custom-toggler .toggler-icon {
  display: block;
  width: 28px;
  height: 2px;
  background-color: var(--text-dark);
  position: relative;
  transition: 0.3s;
}

.custom-toggler .toggler-icon::before,
.custom-toggler .toggler-icon::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--text-dark);
}

.custom-toggler .toggler-icon::before { top: -8px; }
.custom-toggler .toggler-icon::after { bottom: -8px; }

@media (max-width: 991px) {
  .navbar-collapse {
    background: white;
    margin-top: 20px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  .nav-link { margin: 15px 0; }
}
</style>