// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  pages: true,
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/', '/businesses']
    }
  },
  routeRules: {
    '/': { redirect: '/businesses' }
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
