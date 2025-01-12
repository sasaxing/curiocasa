import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // to allow other devices to access the web server
    port: 8080,
    proxy: {
      "/antikas": "http://localhost:5000", // use this, only if frontend and backend are on the same host
    },
  },
})
