<template>
  <section id="Home" class="hero-section">
    <div class="container">
      <div class="row align-items-center min-vh-100 g-5">
        
        <div class="col-lg-7 order-2 order-lg-1">
          <p class="text-uppercase tracking-wider text-muted small fw-bold mb-2">Backend Developer</p>
          <h1 class="display-3 fw-bold mb-4 main-title">
            Hello, I'm <br><span class="text-danger">Nguyễn Tuấn Khoa</span><br />
            I'm a Java Developer.
          </h1>
          <p class="text-secondary mb-5 hero-desc">
            Complexity Simplified
          </p>

          <div class="d-flex gap-3 btn-group-mobile">
            <a href="#Work" class="btn btn-dark px-4 py-2 rounded-0">My Projects</a>
            <a href="#Contact" class="btn btn-outline-dark px-4 py-2 rounded-0">Contact</a>
          </div>
        </div>

        <div class="col-lg-5 order-1 order-lg-2 text-center">
          <div class="signature-wrapper">
            <img 
              src="../img/me.jpg" 
              alt="Nguyễn Tuấn Khoa" 
              class="signature-img img-fluid"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: #ffffff;
  color: #1a1a1a;
  overflow: hidden;
  padding-top: 80px; /* Tránh bị che bởi Navbar fixed */
}

.tracking-wider {
  letter-spacing: 3px;
}

.main-title {
  line-height: 1.2;
}

.hero-desc {
  width: 75%;
}

/* Nút tối giản */
.btn-dark {
  background-color: #000;
  border: none;
  transition: 0.3s;
}

.btn-dark:hover {
  background-color: #e74c3c;
  transform: translateY(-2px);
}

.btn-outline-dark {
  border: 1px solid #000;
  border-radius: 0;
  transition: 0.3s;
}

.btn-outline-dark:hover {
  background-color: #000;
  color: #fff;
  transform: translateY(-2px);
}

.signature-wrapper {
  position: relative;
  display: inline-block;
}

.signature-img {
  max-width: 380px; 
  height: auto;
  border-radius: 30px; /* Bo góc hiện đại hơn */
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  transition: all 0.5s ease;
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

/* Responsive tối ưu cho Mobile */
@media (max-width: 991px) {
  .hero-section {
    padding-top: 100px;
    text-align: center; /* Căn giữa toàn bộ nội dung trên mobile */
  }

  .main-title {
    font-size: 2.2rem; /* Giảm size chữ để không bị tràn màn hình */
    margin-top: 20px;
  }

  .hero-desc {
    width: 100%;
    margin-bottom: 30px;
  }

  .btn-group-mobile {
    justify-content: center; /* Căn giữa 2 nút */
    margin-bottom: 50px;
  }

  .signature-img {
    max-width: 280px;
    box-shadow: 10px 10px 30px #d9d9d9;
  }
}
</style>