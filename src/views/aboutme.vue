<template>
  <section id="About" class="py-5 bg-white overflow-hidden">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-5 col-md-8 mx-auto">
          <div class="about-img-wrapper">
            <div class="main-img-container shadow-lg rounded-4">
              <img src="../img/daidien.jpeg" alt="Nguyễn Tuấn Khoa" class="img-fluid main-profile-img">
            </div>
            
            <div v-for="(skill, index) in skills" 
                 :key="index" 
                 :class="['brand-badge', skill.class]">
              <img :src="skill.img" :alt="skill.name" class="logo-img" :title="skill.name">
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="ps-lg-4">
            <p class="text-danger fw-bold mb-1 letter-spacing-2">ABOUT ME</p>
            <h2 class="display-5 fw-bold mb-4">
              Software Developer <br>
              <span class="text-muted fs-3">based in Vietnam</span>
            </h2>
            
         <div class="content-text text-secondary mb-4">
            <p class="lead">
              Hello! I'm <strong>Nguyen Tuan Khoa</strong>, a Software Engineering student at <strong>FPT Polytechnic</strong>.
            </p>
            <p>
              I am deeply passionate about architecting robust Backend systems using Java. My goal is to transition into a 
              <strong>Junior Java Developer</strong> role through a dedicated professional growth roadmap.
            </p>
            <p>
              Beyond academics, my experience in managing a small business has sharpened my problem-solving skills 
              and fostered a high sense of responsibility in every project I undertake.
            </p>
          </div>

            <div class="row g-4">
              <div class="col-sm-6">
                <div class="info-card border-start border-danger border-3 ps-3">
         <h5 class="fw-bold mb-1">Education</h5>
      <p class="text-muted small m-0">FPT Polytechnic Student</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="info-card border-start border-danger border-3 ps-3">
                     <h5 class="fw-bold mb-1">Career Goal</h5>
      <p class="text-muted small m-0">Internship to Junior Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Bạn có thể dễ dàng thêm hoặc bớt skill tại đây
const skills = [
  { name: 'SQL', img: new URL('../img/sql.png', import.meta.url).href, class: 'b-sql' },
  { name: 'Vue', img: new URL('../img/vue-js.png', import.meta.url).href, class: 'b-vue' },
  { name: 'Bootstrap', img: new URL('../img/bootstrap.png', import.meta.url).href, class: 'b-bootstrap' },
  { name: 'IntelliJ', img: new URL('../img/logointell.jpg', import.meta.url).href, class: 'b-intellij' },
];
</script>

<style scoped>
.letter-spacing-2 { letter-spacing: 2px; }

.about-img-wrapper {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.main-img-container {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.main-profile-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.about-img-wrapper:hover .main-profile-img {
  transform: scale(1.05);
}

/* Badge Styling */
.brand-badge {
  position: absolute;
  background: white;
  padding: 12px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.logo-img { width: 40px; height: 40px; object-fit: contain; }

/* Vị trí các badge */
.b-sql { top: 10%; right: -10px; animation: float 4s infinite ease-in-out; }
.b-vue { top: 35%; right: -25px; animation: float 3.5s infinite ease-in-out 0.5s; }
.b-bootstrap { top: 60%; right: -10px; animation: float 4.5s infinite ease-in-out 1s; }
.b-intellij { bottom: 5%; right: 20px; animation: float 3s infinite ease-in-out 1.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* Hover effect cho cả cụm */
.about-img-wrapper:hover .brand-badge {
  right: 0px;
}

/* Responsive */
@media (max-width: 991px) {
  .about-img-wrapper { max-width: 320px; }
  .brand-badge { padding: 8px; }
  .logo-img { width: 30px; height: 30px; }
  
  /* Đưa badge vào trong một chút để không bị lòi khỏi màn hình mobile */
  .b-sql, .b-vue, .b-bootstrap { right: 5px; }
  .b-intellij { right: 30px; }
}

@media (max-width: 576px) {
  .display-5 { font-size: 2rem; }
}
</style>