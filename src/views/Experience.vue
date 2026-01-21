<template>
  <section id="Experience" class="py-5 bg-white">
    <div class="container">
      <div class="mb-5 text-start">
        <p class="text-danger fw-bold mb-1 tracking-widest">MY JOURNEY</p>
        <h2 class="display-5 fw-bold text-dark">Experience & <span class="text-outline">Projects</span></h2>
      </div>

      <div class="timeline-container">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="row">
            <div class="col-md-4">
              <h4 class="fw-bold text-danger">2025</h4>
              <p class="text-muted small">Academic Full-stack Project</p>
            </div>
            <div class="col-md-8">
              <h3 class="fw-bold h4">Entertainment Video Hub (Java Web)</h3>
              <p class="text-secondary">
                Developed a dynamic video-sharing platform. This project allowed me to master 
                <strong>Session Management</strong>, <strong>User Authentication</strong>, and 
                handling complex data relationships in SQL Server.
              </p>
              <div class="tech-used mb-3">
                <span class="badge-sm">Java Servlet</span>
                <span class="badge-sm">JSP</span>
                <span class="badge-sm">SQL Server</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-item">
  <div class="timeline-dot bg-warning"></div>
  <div class="row">
    <div class="col-md-4">
      <h4 class="fw-bold text-warning">June 2025</h4>
      <p class="text-muted small">Professional Certification</p>
    </div>
    <div class="col-md-8">
      <h3 class="fw-bold h4">Web Development Proficiency Certificate</h3>
      <p class="text-secondary">
        Issued by <strong>FPT Polytechnic</strong>. This certification validates my hands-on skills in 
        architecting, developing, and deploying modern web applications using industry standards.
      </p>
      <div class="mt-2">
        <img src="../img/chungchiweb.jpg" alt="chungchi" style="width: 60%; border-radius: 10px; ">
       <br>
        <span class="badge-cert">Certified by Xuongthuchanh.poly.edu.vn</span>
      </div>
    </div>
  </div>
</div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="row">
            <div class="col-md-4">
              <h4 class="fw-bold text-danger">2024</h4>
              <p class="text-muted small">Desktop Application</p>
            </div>
            <div class="col-md-8">
              <h3 class="fw-bold h4">Vehicle Management System</h3>
              <p class="text-secondary">
                Built an enterprise-grade desktop system. Focused on <strong>MVC Architecture</strong>, 
                inventory tracking algorithms, and creating professional UIs using Scene Builder.
              </p>
              <div class="tech-used mb-3">
                <span class="badge-sm">JavaFX</span>
                <span class="badge-sm">Scene Builder</span>
                <span class="badge-sm">SQL Server</span>
              </div>
            </div>
          </div>
        </div>
        

        <div class="timeline-item border-0">
          <div class="timeline-dot bg-secondary"></div>
          <div class="row">
            <div class="col-md-4">
              <h4 class="fw-bold text-secondary">2024 - Present</h4>
              <p class="text-muted small">Entrepreneurship</p>
            </div>
            <div class="col-md-8">
              <h3 class="fw-bold h4">Small Business Owner</h3>
              <p class="text-secondary">
                Managing a local beverage shop. This real-world experience sharpened my 
                <strong>Problem-solving</strong> skills and taught me how to handle 
                customer requirements effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.text-outline {
  -webkit-text-stroke: 1px #1a1a1a;
  color: transparent;
}

.timeline-container {
  position: relative;
  padding-left: 20px;
}

/* Đường kẻ dọc nối các dự án */
.timeline-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background-color: #f1f1f1;
}

.timeline-item {
  position: relative;
  padding-bottom: 50px;
  transition: 0.3s;
}

.timeline-dot {
  position: absolute;
  left: -26px;
  top: 5px;
  width: 14px;
  height: 14px;
  background-color: #e74c3c;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px #f1f1f1;
  z-index: 2;
}

.timeline-item:hover {
  transform: translateX(10px);
}

.badge-sm {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
  padding: 4px 10px;
  margin-right: 5px;
  border-radius: 4px;
  text-transform: uppercase;
}

.tracking-widest {
  letter-spacing: 5px;
}
</style>