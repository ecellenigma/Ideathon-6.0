import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allows access from other devices
    port: 5173,       // (Optional) Change port if needed
    strictPort: true, // Ensures it uses the specified port
  },
  plugins: [react(),tailwindcss()],
})
