import { defineNuxtConfig } from 'nuxt'
import sass from "sass"
import svgLoader from "vite-svg-loader"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
  build: {
    loaders: {
      scss: {
        implementation: sass,
      },
    },
  },
  css: [
    '~/assets/styles/index.scss',
    '~/assets/styles/fonts.scss',
  ],
  modules: [
    '@nuxtjs/sanity', 
    '@vueuse/nuxt',
    
  ],
  vite: {
    plugins: [
      svgLoader({
        /* ... */
      })
    ]
  },
  sanity: {
    projectId: 'ty9dq4lc',
    dataset: 'production'
  }
})
