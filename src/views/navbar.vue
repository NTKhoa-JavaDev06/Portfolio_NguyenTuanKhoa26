<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#Home">
        <img src="../img/chukyfinal.png" class="nav-logo" alt="Signature Logo">
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
          <li class="nav-item"><a class="nav-link" href="#Home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#About">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#Skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#Work">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#Experience">Experience</a></li>
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
const handleScroll = () => { isScrolled.value = window.scrollY > 50; };

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  const menuToggle = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach((l) => {
    l.addEventListener('click', () => {
      if (window.innerWidth < 992 && menuToggle.classList.contains('show')) {
        // Sử dụng cách gọi an toàn cho Bootstrap 5
        const bsCollapse = bootstrap.Collapse.getInstance(menuToggle) || new bootstrap.Collapse(menuToggle);
        bsCollapse.hide();
      }
    });
  });
});

onUnmounted(() => { window.removeEventListener('scroll', handleScroll); });
</script>

<style scoped>
.navbar {
  --primary-red: #e74c3c;
  --text-dark: #1a1a1a;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.4s ease;
  padding: 20px 0;
  background-color: transparent;
}

.navbar-scrolled {
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid var(--primary-red);
}

.nav-logo {
  width: 140px;
  transition: 0.3s;
}
/* Tablet và Mobile chung (Dưới 992px) */
@media (max-width: 991px) {
  .nav-logo { 
    width: 100px; /* Nhỏ lại một chút so với bản cũ */
  }
  .navbar-collapse {
    background: white;
    margin-top: 15px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border: 1px solid rgba(231, 76, 60, 0.1); /* Viền đỏ nhạt tạo điểm nhấn */
  }
}

@media (max-width: 576px) {
  .nav-logo { 
    width: 85px; /* Thu nhỏ tối đa để giữ Navbar nằm trên 1 hàng */
  }
  .navbar {
    padding: 10px 0; /* Giảm padding của toàn bộ nav trên mobile */
  }
  .custom-toggler {
    padding: 4px 8px; /* Thu nhỏ nút hamburger một chút */
  }
}

.nav-link {
  color: var(--text-dark) !important;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin: 0 10px;
}

.btn-action {
  border: 2px solid var(--text-dark) !important;
  padding: 8px 20px !important;
  font-family: 'Space Mono', monospace;
}

.btn-action:hover {
  background: var(--text-dark) !important;
  color: white !important;
}
</style>