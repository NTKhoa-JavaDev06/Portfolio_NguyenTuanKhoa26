import { defineConfig } from 'vite'
import vue from '@vitejs/api-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
})