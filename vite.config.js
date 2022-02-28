
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default {
  plugins: [vue()],
  // alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')// Set alias
    }
  }
  
}
