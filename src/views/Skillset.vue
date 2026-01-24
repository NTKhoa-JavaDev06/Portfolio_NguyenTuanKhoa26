<template>
  <section id="Skills" class="py-5 bg-light">
    <div class="container">
      <div class="mb-5 text-center">
        <p class="text-danger fw-bold mb-1 tracking-widest">CÔNG NGHỆ SỬ DỤNG</p>
        <h2 class="display-6 fw-bold text-dark">
          Kỹ năng <span class="text-outline">chuyên môn</span>
        </h2>
      </div>

      <div class="row g-4">
        <!-- Backend -->
        <div class="col-md-4">
          <div class="skill-card h-100 p-4 shadow-sm border-0 bg-white">
            <div class="icon-header mb-4">
              <i class="fas fa-server text-danger fa-2x"></i>
            </div>
            <h4 class="fw-bold mb-3">Phát triển Backend</h4>
            <p class="text-muted small mb-4">
              Tập trung xây dựng logic phía server có khả năng mở rộng và bảo mật.
            </p>
            <div class="skill-tags">
              <span class="tag">Java Core / Advanced</span>
              <span class="tag">Spring Boot</span>
              <span class="tag">Java Servlet & JSP</span>
              <span class="tag">JavaFX</span>
              <span class="tag">RESTful API</span>
            </div>
          </div>
        </div>

        <!-- Frontend -->
        <div class="col-md-4">
          <div class="skill-card h-100 p-4 shadow-sm border-0 bg-white">
            <div class="icon-header mb-4">
              <i class="fas fa-laptop-code text-danger fa-2x"></i>
            </div>
            <h4 class="fw-bold mb-3">Nền tảng Frontend</h4>
            <p class="text-muted small mb-4">
              Xây dựng giao diện người dùng trực quan, responsive và dễ tương tác.
            </p>
            <div class="skill-tags">
              <span class="tag">Vue.js 3</span>
              <span class="tag">Bootstrap 5</span>
              <span class="tag">HTML5 & CSS3</span>
              <span class="tag">JavaScript (ES6+)</span>
            </div>
          </div>
        </div>

        <!-- Database & Tools -->
        <div class="col-md-4">
          <div class="skill-card h-100 p-4 shadow-sm border-0 bg-white">
            <div class="icon-header mb-4">
              <i class="fas fa-tools text-danger fa-2x"></i>
            </div>
            <h4 class="fw-bold mb-3">Cơ sở dữ liệu & Công cụ</h4>
            <p class="text-muted small mb-4">
              Quản lý dữ liệu và tối ưu quy trình phát triển phần mềm.
            </p>
            <div class="skill-tags">
              <span class="tag">SQL Server</span>
              <span class="tag">MySQL</span>
              <span class="tag">Git & GitHub</span>
              <span class="tag">IntelliJ IDEA</span>
              <span class="tag">Postman</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

</script>
<style scoped>
.bg-light {
  background-color: #f9f9f9 !important;
}

.text-outline {
  -webkit-text-stroke: 1px #1a1a1a;
  color: transparent;
}

/* Skill Card Styling */
.skill-card {
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.skill-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
}

/* Thêm vạch màu đỏ nhỏ ở đầu card khi hover */
.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: #e74c3c;
  transition: width 0.4s ease;
}

.skill-card:hover::before {
  width: 100%;
}

/* Skill Tags Styling */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: #f1f1f1;
  color: #444;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: #e74c3c;
  color: white;
  transform: scale(1.05);
}

.icon-header {
  width: 60px;
  height: 60px;
  background: rgba(231, 76, 60, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

.tracking-widest {
  letter-spacing: 4px;
}
</style>