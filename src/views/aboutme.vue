<template>
  <section id="About" class="py-5 bg-white">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-5">
          <div class="about-img-wrapper">
            <img src="../img/me2.JPG" alt="Nguyễn Tuấn Khoa" class="img-fluid rounded-4 shadow-lg main-profile-img">
            
            <div class="brand-badge b-sql"><img src="../img/sql.png" alt="SQL" class="logo-img"></div>
            <div class="brand-badge b-vue"><img src="../img/vue-js.png" alt="Vue" class="logo-img"></div>
            <div class="brand-badge b-bootstrap"><img src="../img/bootstrap.png" alt="Bootstrap" class="logo-img"></div>
            <div class="brand-badge b-intellij"><img src="../img/logointell.jpg" alt="IntelliJ" class="logo-img"></div>
          </div>
        </div>

        <div class="col-lg-7">
          <p class="text-danger fw-bold mb-1 tracking-widest">ABOUT ME</p>
          <h2 class="display-5 fw-bold mb-4">Software Developer <br><span class="text-muted">based in Vietnam</span></h2>
          
          <p class="lead text-secondary">Hello! I'm <strong>Nguyen Tuan Khoa</strong>, a Software Engineering student at <strong>FPT Polytechnic</strong>.</p>
          <p class="text-muted">I am deeply passionate about architecting robust Backend systems using Java. My goal is to transition into a <strong>Junior Java Developer</strong> role through a professional growth roadmap.</p>
          <p class="text-muted">Beyond academics, managing a small business has honed my problem-solving skills and fostered a high sense of responsibility in every project.</p>
          
          <div class="row mt-4 g-4">
            <div class="col-6 border-start border-danger border-3">
              <h5 class="fw-bold mb-1">Education</h5>
              <p class="text-muted small m-0">FPT Polytechnic Student</p>
            </div>
            <div class="col-6 border-start border-danger border-3">
              <h5 class="fw-bold mb-1">Career Goal</h5>
              <p class="text-muted small m-0">Internship to Junior Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-img-wrapper {
  position: relative;
  max-width: 450px;
  margin: 0 auto;
}
.main-profile-img { width: 100%; object-fit: cover; }
.brand-badge {
  position: absolute;
  background: white;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  z-index: 2;
  transition: 0.3s ease;
}
.logo-img { width: 40px; height: 40px; object-fit: contain; }

.b-sql { top: 10%; right: -25px; animation: float 4s infinite; }
.b-vue { top: 35%; right: -35px; animation: float 3.5s infinite; }
.b-bootstrap { top: 60%; right: -25px; animation: float 4.5s infinite; }
.b-intellij { bottom: 5%; right: -15px; animation: float 3s infinite; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.about-img-wrapper:hover .brand-badge { right: -10px; transform: scale(1.1); }

@media (max-width: 991px) {
  .about-img-wrapper { max-width: 320px; margin-bottom: 40px; }
  .brand-badge { padding: 6px; }
  .logo-img { width: 30px; height: 30px; }
  .b-sql { right: -15px; }
  .b-vue { right: -20px; }
  .b-bootstrap { right: -15px; }
  .b-intellij { right: -10px; }
}
</style>