export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  pages: true,
  ssr: true,
  nitro: {
    preset: 'node-server'
  }
})