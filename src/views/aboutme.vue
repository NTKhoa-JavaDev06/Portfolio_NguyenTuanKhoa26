<template>
  <section id="About" class="py-5 bg-white overflow-hidden">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-5 col-md-8 mx-auto">
          <div class="about-img-wrapper">
            <div class="main-img-container shadow-lg rounded-4">
              <img src="../img/daidien.jpeg" alt="Nguyen Tuan Khoa" class="img-fluid main-profile-img">
            </div>
            
            <div v-for="(skill, index) in skills" 
                 :key="index" 
                 :class="['brand-badge', skill.class]">
              <img :src="skill.img" :alt="skill.name" class="logo-img">
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="ps-lg-4">
            <p class="text-danger fw-bold mb-1 letter-spacing-2 text-uppercase">About Me</p>
            <h2 class="display-5 fw-bold mb-4">
              Software Developer <br>
              <span class="text-muted fs-3">based in Ho Chi Minh City, Vietnam</span>
            </h2>
            
            <div class="content-text text-secondary mb-4">
              <p class="lead">Hi there! I'm <strong>Nguyen Tuan Khoa</strong>, a Software Engineering student at <strong>FPT Polytechnic</strong>.</p>
              <p>I am deeply passionate about architecting robust <strong>Backend systems</strong> with a focus on <strong>Java</strong> technology.</p>
              <p>Beyond my academic studies, managing a small business has sharpened my problem-solving abilities and instilled a strong sense of responsibility.</p>
            </div>

            <div class="row g-4">
              <div class="col-sm-6">
                <div class="info-card border-start border-danger border-3 ps-3">
                  <h5 class="fw-bold mb-1">Education</h5>
                  <p class="text-muted small m-0">Software Engineering<br>FPT Polytechnic</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="info-card border-start border-danger border-3 ps-3">
                  <h5 class="fw-bold mb-1">Career Goal</h5>
                  <p class="text-muted small m-0">Backend Developer<br>(Internship / Junior)</p>
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
const skills = [
  { name: 'SQL', img: new URL('../img/sql.png', import.meta.url).href, class: 'b-sql' },
  { name: 'Vue', img: new URL('../img/vue-js.png', import.meta.url).href, class: 'b-vue' },
  { name: 'Bootstrap', img: new URL('../img/bootstrap.png', import.meta.url).href, class: 'b-bootstrap' },
  { name: 'IntelliJ', img: new URL('../img/logointell.jpg', import.meta.url).href, class: 'b-intellij' },
];
</script>

<style scoped>
.letter-spacing-2 { letter-spacing: 2px; }
.about-img-wrapper { position: relative; max-width: 400px; margin: 0 auto; padding: 20px; }
.main-img-container { overflow: hidden; }
.main-profile-img { width: 100%; height: auto; display: block; transition: 0.5s ease; }
.about-img-wrapper:hover .main-profile-img { transform: scale(1.05); }

.brand-badge {
  position: absolute; background: white; padding: 12px; border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12); z-index: 2; transition: 0.4s ease;
}
.logo-img { width: 40px; height: 40px; object-fit: contain; }

.b-sql { top: 10%; right: -10px; animation: float 4s infinite ease-in-out; }
.b-vue { top: 35%; right: -25px; animation: float 3.5s infinite ease-in-out 0.5s; }
.b-bootstrap { top: 60%; right: -10px; animation: float 4.5s infinite ease-in-out 1s; }
.b-intellij { bottom: 5%; right: 20px; animation: float 3s infinite ease-in-out 1.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@media (max-width: 991px) {
  .about-img-wrapper { max-width: 320px; }
  .logo-img { width: 30px; height: 30px; }
  .brand-badge { padding: 8px; }
  .b-sql, .b-vue, .b-bootstrap { right: 5px; }
}
</style>