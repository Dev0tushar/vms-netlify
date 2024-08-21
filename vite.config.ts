// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       external: ['axios'],
//     },
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [], // Keep this empty if you don't want to externalize axios
    },
  },
  optimizeDeps: {
    include: ['axios'],
  }
})
