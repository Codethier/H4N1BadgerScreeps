import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, './src/strategy1/main.ts'),
      name: 'screeps',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        format: 'cjs'
      }
    }
  }
})