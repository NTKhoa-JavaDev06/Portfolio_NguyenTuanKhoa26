<template>
  <section id="Work" class="work-section py-5">
    <div class="container">
      <div class="mb-5 text-start header-reveal">
        <p class="text-danger fw-bold mb-1 tracking-widest">DỰ ÁN TIÊU BIỂU</p>
        <h2 class="display-4 fw-bold text-dark">
          Dự án <span class="text-outline">gần đây</span>
        </h2>
      </div>

      <div class="row g-5">
        <!-- Project 01 -->
        <div class="col-md-6">
          <div class="project-item">
            <div class="project-img-wrapper">
              <img src="../img/image.png" alt="Website Video" class="img-fluid project-img" @click="openGallery(1)" style="cursor: pointer;">
              <div class="project-overlay">
                <span class="project-year">2025</span>
              </div>
            </div>
            <div class="project-info mt-4">
              <span class="project-number">01</span>
              <h3 class="fw-bold project-title">Nền tảng chia sẻ video giải trí</h3>
              <p class="text-muted project-desc">
                Website chia sẻ video động với các chức năng đăng nhập người dùng,
                quản lý video, tương tác thích và chia sẻ, lấy cảm hứng từ các
                chức năng cốt lõi của YouTube.
              </p>
              <div class="tech-stack mt-3">
                <span class="badge-tech">Java Servlet</span>
                <span class="badge-tech">JSP</span>
                <span class="badge-tech">SQL Server</span>
              </div>
              <div class="mt-4">
                <a href="https://github.com/NTKhoa-JavaDev06" target="_blank" class="view-link" >
                  Xem mã nguồn <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 02 -->
        <div class="col-md-6">
          <div class="project-item">
            <div class="project-img-wrapper">
              <img src="../img/image (4).png"  alt="Quản lý showroom xe" class="img-fluid project-img" @click="openGallery(1)"  style="cursor: pointer;">
              <div class="project-overlay">
                <span class="project-year">2024</span>
              </div>
            </div>
            <div class="project-info mt-4">
              <span class="project-number">02</span>
              <h3 class="fw-bold project-title">Hệ thống quản lý phương tiện</h3>
              <p class="text-muted project-desc">
                Hệ thống quản lý theo hướng doanh nghiệp dành cho showroom xe,
                hỗ trợ quản lý tồn kho, đơn hàng khách hàng và báo cáo doanh số
                với tích hợp cơ sở dữ liệu SQL Server.
              </p>
              <div class="tech-stack mt-3">
                <span class="badge-tech">JavaFX</span>
                <span class="badge-tech">Scene Builder</span>
                <span class="badge-tech">SQL Server</span>
              </div>
              <div class="mt-4">
                <a href="#" class="view-link">
                  Xem chi tiết <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <div v-if="showGallery" class="gallery-overlay" @click.self="closeGallery">
  <button class="nav-btn left" @click="prevImage">
    ❮</button>

  <img
    :src="currentGallery[currentIndex]"
    class="gallery-image"
    alt="Project gallery"
  />

  <button class="nav-btn right" @click="nextImage">❯</button>

  <span class="close-btn" @click="closeGallery">✕</span>
</div>

</template>
<script setup>
  import { ref } from 'vue'
  import carbia from '../img/image (4).png'
  import car1 from '../img/anh2.jpg'
  import car2 from '../img/QLK.jpg'
  import car3 from '../img/LSBH.jpg'
  import car4 from '../img/Formbanhang.jpg'

  import car5 from '../img/Thongtincacnhan.png'
  import car6 from '../img/Thanhtoan.png'

const showGallery = ref(false)
const currentIndex = ref(0)

const showGallery2 = ref(false)
const currentIndex2 = ref(0)

const currentGallery2 = ref([])

const opeGallery = (projectIndex) => {
  currentGallery.value = galleriezs[projectIndex]
  currentIndex.value = 0
  showGallery.value = true
}

const closGallery = () => {
  showGallery.value = false
}

const nexImage = () => {
  currentIndex.value =
    (currentIndex.value + 1) % currentGallery.value.length
}

const preImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + currentGallery.value.length) %
    currentGallery.value.length
}

const galleries = [
  
  [carbia],
  [car1 , car2, car3, car4, car5, car6]
]


const currentGallery = ref([])

const openGallery = (projectIndex) => {
  currentGallery.value = galleries[projectIndex]
  currentIndex.value = 0
  showGallery.value = true
}

const closeGallery = () => {
  showGallery.value = false
}

const nextImage = () => {
  currentIndex.value =
    (currentIndex.value + 1) % currentGallery.value.length
}

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + currentGallery.value.length) %
    currentGallery.value.length
}
</script>

<style scoped>
  /* Gallery Overlay */
.gallery-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* Image */
.gallery-image {
  max-width: 80%;
  max-height: 80%;
  border-radius: 12px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

/* Navigation Buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 3rem;
  color: white;
  cursor: pointer;
  user-select: none;
}

.nav-btn.left {
  left: 40px;
}

.nav-btn.right {
  right: 40px;
}


.close-btn {
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

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