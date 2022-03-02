
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default {
  plugins: [vue(), VitePWA(
    {
      //includeAssets: ['fonts/*.ttf', 'images/*.png']
    }
  )],
  // alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')// Set alias
    }
  }
  
}
