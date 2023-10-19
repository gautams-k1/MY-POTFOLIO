import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/', // Add the base option here
  plugins: [react()],
})
