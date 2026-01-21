<template>
  <section id="Work" class="work-section py-5">
    <div class="container">
      <div class="mb-5 text-start header-reveal">
        <p class="text-danger fw-bold mb-1 tracking-widest">SELECTED PORTFOLIO</p>
        <h2 class="display-4 fw-bold text-dark">
          Latest <span class="text-outline">Projects</span>
        </h2>
      </div>

      <div class="row g-5">
        <div class="col-md-6">
          <div class="project-item">
            <div class="project-img-wrapper">
              <img src="../img/image.png" alt="Video Website" class="img-fluid project-img">
              <div class="project-overlay">
                 <span class="project-year">2025</span>
              </div>
            </div>
            <div class="project-info mt-4">
              <span class="project-number">01</span>
              <h3 class="fw-bold project-title">Entertainment Video Hub</h3>
              <p class="text-muted project-desc">
                A dynamic video-sharing platform featuring user authentication, video management, and interactive liking/sharing capabilities, inspired by YouTube's core functionalities.
              </p>
              <div class="tech-stack mt-3">
                <span class="badge-tech">Java Servlet</span>
                <span class="badge-tech">JSP</span>
                <span class="badge-tech">SQL Server</span>
              </div>
              <div class="mt-4">
                <a href="https://github.com/NTKhoa-JavaDev06" target="_blank" class="view-link">
                  View Repository <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="project-item">
            <div class="project-img-wrapper">
              <img src="../img/image (4).png" alt="Car Showroom" class="img-fluid project-img">
              <div class="project-overlay">
                 <span class="project-year">2024</span>
              </div>
            </div>
            <div class="project-info mt-4">
              <span class="project-number">02</span>
              <h3 class="fw-bold project-title">Vehicle Management System</h3>
              <p class="text-muted project-desc">
                An enterprise-grade management system designed for vehicle showrooms. It streamlines inventory tracking, customer orders, and sales reporting with a robust SQL Server integration.
              </p>
              <div class="tech-stack mt-3">
                <span class="badge-tech">JavaFX</span>
                <span class="badge-tech">Scene Builder</span>
                <span class="badge-tech">SQL Server</span>
              </div>
              <div class="mt-4">
                <a href="#" class="view-link">
                  View Case Study <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work-section {
  background-color: #ffffff;
  padding: 100px 0;
}

.tracking-widest {
  letter-spacing: 5px;
  font-size: 0.75rem;
}

.text-outline {
  -webkit-text-stroke: 1px #1a1a1a;
  color: transparent;
}

/* Project Image Styling */
.project-img-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
}

.project-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0;
  transition: 0.4s;
}

.project-year {
  background: rgba(255, 255, 255, 0.9);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

/* Project Item Hover */
.project-item:hover .project-img {
  transform: scale(1.08);
}

.project-item:hover .project-img-wrapper {
  box-shadow: 0 30px 60px rgba(231, 76, 60, 0.1);
  transform: translateY(-10px);
}

.project-item:hover .project-overlay {
  opacity: 1;
}

/* Typography */
.project-number {
  font-family: 'Space Mono', monospace;
  color: #e74c3c;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.project-title {
  font-size: 1.75rem;
  margin-bottom: 15px;
  transition: color 0.3s;
}

.project-item:hover .project-title {
  color: #e74c3c;
}

.project-desc {
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Tech Badges */
.badge-tech {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  color: #555;
  background: #f0f0f0;
  padding: 6px 14px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  text-transform: uppercase;
}

/* View Link */
.view-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 5px;
}

.view-link::after {
  content: '';
  position: absolute;
  width: 40%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #e74c3c;
  transition: 0.4s;
}

.view-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .project-img { height: 220px; }
  .project-title { font-size: 1.4rem; }
}
</style>