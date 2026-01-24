<template>
  <section id="Contact" class="py-5 bg-dark text-white">
    <div class="container">
      <div class="mb-5 text-start">
        <p class="text-danger fw-bold mb-1 tracking-widest text-uppercase">Liên hệ</p>
        <h2 class="display-4 fw-bold">
          Hãy <span class="text-outline-white">kết nối</span> với tôi
        </h2>
      </div>

      <div class="row g-5">
        <div class="col-lg-6">
          <p class="lead text-secondary mb-5">
            Tôi đang tìm kiếm vị trí <strong>Thực tập sinh Java Developer</strong>,
            với mong muốn phát triển lên <strong>Senior Developer</strong> sau thời gian thực tập.
            Tôi sẵn sàng học hỏi, đóng góp và đối mặt với những thử thách mới.
          </p>

          <div class="contact-info-list">
            <div class="d-flex align-items-center mb-4">
              <div class="contact-icon-box">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="ms-3">
                <p class="text-secondary small mb-0">Email</p>
                <a
                  href="mailto:nguyenkhanh7510@gmail.com"
                  class="text-white text-decoration-none fw-bold"
                >
                  nguyenkhanh7510@gmail.com
                </a>
              </div>
            </div>

            <div class="d-flex align-items-center mb-4">
              <div class="contact-icon-box">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="ms-3">
                <p class="text-secondary small mb-0">Địa chỉ</p>
                <p class="text-white fw-bold mb-0">TP. Hồ Chí Minh, Việt Nam</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="social-grid">
            <a
              href="https://github.com/NTKhoa-JavaDev06"
              target="_blank"
              class="social-card text-decoration-none"
            >
              <div class="card-content">
                <i class="fab fa-github fa-2x mb-3"></i>
                <h5 class="text-white fw-bold">GitHub</h5>
                <p class="text-secondary small mb-0">
                  Xem mã nguồn và các dự án đã thực hiện
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/nguyen-tuan-khoa-b9a81b20b"
              target="_blank"
              class="social-card text-decoration-none"
            >
              <div class="card-content">
                <i class="fab fa-linkedin fa-2x mb-3"></i>
                <h5 class="text-white fw-bold">LinkedIn</h5>
                <p class="text-secondary small mb-0">
                  Kết nối và trao đổi chuyên nghiệp
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.bg-dark {
  background-color: #0f0f0f !important;
}

.text-outline-white {
  -webkit-text-stroke: 1px #ffffff;
  color: transparent;
}

.tracking-widest {
  letter-spacing: 5px;
  font-size: 0.8rem;
}

/* Style cho Icon Box */
.contact-icon-box {
  width: 50px;
  height: 50px;
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #e74c3c;
}

/* Social Grid & Card */
.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.social-card {
  background: #1a1a1a;
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid #333;
  transition: all 0.4s ease;
  display: block;
}

.social-card:hover {
  background: #e74c3c;
  border-color: #e74c3c;
  transform: translateY(-10px);
}

.social-card:hover .text-secondary {
  color: rgba(255, 255, 255, 0.8) !important;
}

.card-content i {
  color: #e74c3c;
  transition: color 0.3s;
}

.social-card:hover .card-content i {
  color: white;
}
</style>