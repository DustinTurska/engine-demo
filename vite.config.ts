import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/App.tsx',
      name: 'ClaimToIframe',
      fileName: (format) => `claim-to-iframe.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@thirdweb-dev/react', '@thirdweb-dev/sdk', 'ethers'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@thirdweb-dev/react': 'ThirdwebReact',
          '@thirdweb-dev/sdk': 'ThirdwebSDK',
          ethers: 'ethers'
        }
      }
    }
  }
})