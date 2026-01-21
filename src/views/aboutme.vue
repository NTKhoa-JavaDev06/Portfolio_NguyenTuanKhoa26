
<template>
    <div>
        <section id="about" class="py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-5 mb-4 mb-lg-0">
     <div class="about-img-wrapper">
  <img src="../img/me2.JPG" alt="Nguyễn Tuấn Khoa" class="img-fluid rounded-4 shadow-lg main-profile-img">
  
  <div class="brand-badge badge-intellij">
    <img src="../img/logointell.jpg" alt="IntelliJ Idea" class="logo-img">
  </div>
    <div class="brand-badge badge-vue">
    <img src="../img/vue-js.png" alt="Vue Js" class="logo-img">
  </div>
  
  <div class="brand-badge badge-sql">
    <img src="../img/sql.png" alt="SQL Server" class="logo-img">
  </div>

  <div class="brand-badge badge-bootstrap">
    <img src="../img/bootstrap.png" alt="Bootstrap" class="logo-img">
  </div>
</div>
      </div>
   <div class="col-lg-7 ps-lg-5">
  <p class="text-danger fw-bold mb-1 tracking-widest">ABOUT ME</p>
  <h2 class="display-5 fw-bold mb-4">Software Developer <br><span class="text-outline">based in Vietnam</span></h2>
  
  <p class="lead text-secondary">
    Hello! I'm <strong>Nguyen Tuan Khoa</strong>, a Software Engineering student at <strong>FPT Polytechnic</strong>.
  </p>
  <p class="text-muted">
    I am deeply passionate about architecting robust Backend systems using Java. My short-term goal is to transition into a <strong>Junior Java Developer</strong> role, following a standard professional growth roadmap. 
  </p>
  <p class="text-muted">
    Beyond my academic studies, I manage a small business. This experience has honed my management skills, problem-solving abilities under pressure, and fostered a high sense of responsibility in every project I undertake.
  </p>
  
  <div class="row mt-4">
    <div class="col-6 border-start border-danger border-3">
      <h5 class="fw-bold mb-1">Education</h5>
      <p class="text-muted small">FPT Polytechnic Student</p>
    </div>
    <div class="col-6 border-start border-danger border-3">
      <h5 class="fw-bold mb-1">Career Goal</h5>
      <p class="text-muted small">Internship to Junior Developer</p>
    </div>
  </div>
</div>
    </div>
  </div>
</section>
    </div>
</template>
<script setup>

</script>
<style scoped>
.about-img-wrapper {
  position: relative; 
  display: inline-block;
  padding: 20px; /* Chừa khoảng trống cho các badge trôi nổi */
}

.main-profile-img {
  width: 100%;
  max-width: 450px; 
  display: block;
  z-index: 1;
}

.brand-badge {
  position: absolute;
  right: -20px; /* Tất cả cùng căn lề phải chệch ra ngoài 20px */
  background: white;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
  z-index: 2;
}

.logo-img {
  width: 42px; 
  height: 42px;
  object-fit: contain;
}
/* Định vị dọc trên một đường thẳng */
.badge-sql {
  top: 20%; /* Logo trên cùng */
  animation: float 4s ease-in-out infinite;
}
.badge-vue {
  top: 35%; 
  animation: float 4s ease-in-out infinite;
}

.badge-bootstrap {
  top: 50%;
  transform: translateY(-50%); /* Căn chính giữa theo chiều dọc */
  animation: float 3.5s ease-in-out infinite;
}

.badge-intellij {
  bottom: 20%; /* Logo dưới cùng */
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Hiệu ứng khi hover vào vùng ảnh */
.about-img-wrapper:hover .brand-badge {
  right: -10px; /* Khi hover thì đồng loạt nhích vào trong một chút */
}

.about-img-wrapper:hover .badge-intellij { transform: scale(1.15) rotate(10deg); }
.about-img-wrapper:hover .badge-sql { transform: scale(1.15) rotate(-10deg); }
.about-img-wrapper:hover .badge-bootstrap { transform: scale(1.15) rotate(5deg); }

/* Mobile responsive */
@media (max-width: 768px) {
  .logo-img { width: 35px; height: 35px; }
  .badge-intellij { right: 5px; bottom: 20px; }
  .badge-sql { right: 5px; top: 30px; }
  .badge-bootstrap { left: 5px; }
}
</style>