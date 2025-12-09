// nuxt/nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  pages: true,
  ssr: true,                     // static site generation
  target: 'static',               // explicitly SSG
  nitro: {
    preset: 'static'              // generate static output
  },
  routeRules: {
    '/**': { prerender: true }    // pre-render all routes
  },
  app: {
    head: {
      title: 'Your Site Title',
      meta: [
        { name: 'description', content: 'Your site description for SEO' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
