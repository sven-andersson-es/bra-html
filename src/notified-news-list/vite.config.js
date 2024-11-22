import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // lib: {
    //   // Could also be a dictionary or array of multiple entry points
    //   entry: resolve(__dirname, 'src/main.jsx'),
    //   name: 'notified-news-list',
    //   // the proper extensions will be added
    //   fileName: 'notified-news-list',
    // },
    outDir: "../../js/notified-news-list",
    emptyOutDir: true,
    minify: true,
    assetsDir: "assets",
    rollupOptions: {
      treeshake: true,
      output: {
        entryFileNames: `notified-news-list.js`,
        chunkFileNames: `notified-news-list-chunk.js`,
        assetFileNames: `notified-news-list.[ext]`
      }
    }
  }
})


  