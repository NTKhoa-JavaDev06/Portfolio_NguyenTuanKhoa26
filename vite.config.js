import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // Sửa từ 'api-vue' thành 'plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', 
})