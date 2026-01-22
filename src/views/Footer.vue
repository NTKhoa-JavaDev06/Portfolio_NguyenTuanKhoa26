<template>
  <footer class="footer-section bg-dark text-white py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 text-center text-md-start mb-4 mb-md-0">
          <h4 class="fw-bold mb-2">NTK<span class="text-danger">.</span></h4>
          <p class="text-secondary small mb-0">
            © 2026 Nguyen Tuan Khoa. <br>
            Java Developer Internship.
          </p>
        </div>

        <div class="col-md-4 text-center mb-4 mb-md-0">
         
        </div>

        <div class="col-md-4 text-center text-md-end">
          <div class="social-links mb-3">
            <a href="https://github.com/NTKhoa-JavaDev06" target="_blank" class="social-icon">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/nguyen-tuan-khoa-b9a81b20b" target="_blank" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:nguyenkhanh7510@gmail.com" class="social-icon">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
          <p class="small text-secondary mb-0">nguyenkhanh7510@gmail.com</p>
        </div>
      </div>

      <hr class="my-4 border-secondary opacity-25">
      <div class="container ">
        <p>©2025 code by Nguyen Tuan Khoa</p>
      </div>
   
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.text-outline-white {
  -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.3);
  color: transparent;
  font-weight: 900;
  letter-spacing: 2px;
}

.footer-slogan {
  font-size: 0.9rem;
}

/* Social Icons Styling */
.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

@media (min-width: 768px) {
  .social-links {
    justify-content: flex-end;
  }
}

.social-icon {
  width: 40px;
  height: 40px;
  background: #222;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #e74c3c;
  color: white;
  transform: translateY(-5px);
}

.bg-dark {
  background-color: #0f0f0f !important;
}
</style>