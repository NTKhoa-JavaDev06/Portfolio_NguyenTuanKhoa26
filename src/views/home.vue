<template>
  <section id="home" class="hero-section">
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-7">
          <p class="text-uppercase tracking-wider text-muted small fw-bold mb-2">Backend Developer</p>
          <h1 class="display-3 fw-bold mb-4">
            Hello, I'm <br><span class="text-danger">Nguyễn Tuấn Khoa</span><br />
            I'm a Java Developer.
          </h1>
          <p class="text-secondary mb-5 w-75">
           Complexity Simplified
          </p>

          <div class="d-flex gap-3">
            <a href="#work" class="btn btn-dark px-4 py-2 rounded-0">My Projects</a>
            <a href="#contact" class="btn btn-outline-dark px-4 py-2 rounded-0">Contact</a>
          </div>
        </div>

        <div class="col-lg-5 text-center d-flex justify-content-center align-items-center">
          <div class="signature-wrapper">
            <img 
              src="../img/me.jpg" 
              alt="Signature" 
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
}

.tracking-wider {
  letter-spacing: 3px;
}

/* Nút tối giản, vuông vức */
.btn-dark {
  background-color: #000;
  border: none;
  transition: 0.3s;
}

.btn-dark:hover {
  background-color: #e74c3c; /* Đổi sang đỏ khi hover cho ngầu */
}

.btn-outline-dark {
  border: 1px solid #000;
  border-radius: 0;
  transition: 0.3s;
}

.btn-outline-dark:hover {
  background-color: #000;
  color: #fff;
}


.signature-wrapper {
  position: relative;
  padding: 20px;
}

.signature-img {
  max-width: 350px; 
  height: auto;

  border-radius: 10%;
  transition: all 0.5s ease;

  animation: floating 3s ease-in-out infinite;
}

.signature-img:hover {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.05);
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* Responsive cho mobile */
@media (max-width: 991px) {
  .display-3 { font-size: 2.5rem; }
  .w-75 { width: 100% !important; }
  .signature-img {
    max-width: 250px;
    margin-top: 50px;
  }
}
</style>