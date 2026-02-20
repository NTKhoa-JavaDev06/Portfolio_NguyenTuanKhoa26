<template>
  <section id="Experience" class="py-5 bg-white">
    <div class="container">
      <div class="mb-5 text-start">
        <p class="text-danger fw-bold mb-1 tracking-widest">HÀNH TRÌNH CỦA TÔI</p>
        <h2 class="display-5 fw-bold text-dark">
          Kinh nghiệm & <span class="text-outline">Dự án</span>
        </h2>
      </div>

      <div class="timeline-container">
        <!-- 2025 Project -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="row">
            <div class="col-md-4">
              <h4 class="fw-bold text-danger">2025</h4>
              <p class="text-muted small">Dự án Full-stack học tập</p>
            </div>
            <div class="col-md-8">
              <h3 class="fw-bold h4">Nền tảng chia sẻ video giải trí (Java Web)</h3>
              <p class="text-secondary">
                Phát triển nền tảng chia sẻ video động. Dự án giúp mình nắm vững
                <strong>quản lý Session</strong>, <strong>xác thực người dùng</strong> và
                xử lý các mối quan hệ dữ liệu phức tạp trong SQL Server.
              </p>
              <div class="tech-used mb-3">
                <span class="badge-sm">Java Servlet</span>
                <span class="badge-sm">JSP</span>
                <span class="badge-sm">SQL Server</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certificate -->
        <div class="timeline-item">
          <div class="timeline-dot bg-warning"></div>
          <div class="row">
            <div class="col-md-4">
              <h4 class="fw-bold text-warning">06 / 2025</h4>
              <p class="text-muted small">Chứng chỉ chuyên môn</p>
            </div>
            <div class="col-md-8">
              <h3 class="fw-bold h4">Chứng chỉ Năng lực Phát triển Web</h3>
              <p class="text-secondary">
                Cấp bởi <strong>FPT University</strong>. Chứng chỉ xác nhận năng lực
                thực hành trong việc thiết kế, phát triển và triển khai các ứng dụng web
                theo tiêu chuẩn hiện đại.
              </p>
              <div class="mt-2">
                <img src="../img/chungchiweb.jpg" alt="chungchi" style="width: 60%; border-radius: 10px;">
                <br>
                <span class="badge-cert">Cấp bởi Xuongthuchanh.poly.edu.vn</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 2024 Desktop App -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="row">
            <div class="col-md-4">
              <h4 class="fw-bold text-danger">2024</h4>
              <p class="text-muted small">Ứng dụng Desktop</p>
            </div>
            <div class="col-md-8">
              <h3 class="fw-bold h4">Hệ thống quản lý phương tiện</h3>
              <p class="text-secondary">
                Xây dựng hệ thống desktop theo hướng doanh nghiệp, tập trung vào
                <strong>kiến trúc MVC</strong>, thuật toán quản lý tồn kho và
                thiết kế giao diện chuyên nghiệp bằng Scene Builder.
              </p>
              <div class="tech-used mb-3">
                <span class="badge-sm">JavaFX</span>
                <span class="badge-sm">Scene Builder</span>
                <span class="badge-sm">SQL Server</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Business -->
        <div class="timeline-item border-0">
          <div class="timeline-dot bg-secondary"></div>
          <div class="row">
            <div class="col-md-4">
              <h4 class="fw-bold text-secondary">2024 - Hiện tại</h4>
              <p class="text-muted small">Kinh doanh</p>
            </div>
            <div class="col-md-8">
              <h3 class="fw-bold h4">Chủ mô hình kinh doanh nhỏ</h3>
              <p class="text-secondary">
                Quản lý cửa hàng đồ uống địa phương. Trải nghiệm thực tế này giúp mình
                nâng cao kỹ năng <strong>giải quyết vấn đề</strong> và khả năng
                nắm bắt, xử lý yêu cầu của khách hàng hiệu quả.
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