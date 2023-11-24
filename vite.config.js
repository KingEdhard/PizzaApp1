import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Client port
    proxy: {
      '/pizzas': {
        target: 'http://localhost:5100', // Mock server port
        changeOrigin: true,
        secure: false,
        ws: true,
        // eslint-disable-next-line no-unused-vars
        configure: (proxy, _options) => {
          // eslint-disable-next-line no-unused-vars
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          // eslint-disable-next-line no-unused-vars
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          // eslint-disable-next-line no-unused-vars
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      }
    }
  }
})