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
    outDir: "../../js/talentech-positionlist",
    emptyOutDir: true,
    minify: true,
    assetsDir: "assets",
    rollupOptions: {
      treeshake: true,
      output: {
        entryFileNames: `talentech-positionlist.js`,
        chunkFileNames: `talentech-positionlist-chunk.js`,
        assetFileNames: `talentech-positionlist.[ext]`
      }
    }
  }
})