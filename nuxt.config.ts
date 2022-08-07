import { defineNuxtConfig } from 'nuxt'
import sass from "sass"

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
    '~/assets/styles/index.scss'
  ],
  modules: [
    '@nuxtjs/sanity', 
    '@vueuse/nuxt',
    
  ],
  sanity: {
    projectId: 'ty9dq4lc',
    dataset: 'production'
  }
})
