import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig( {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt2 A02',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // css: ['@/assets/css/main.css',],

  // currently failing to build with the above mentioned CSS  

  css: ['@/assets/css/main.css',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',


    //https://go.nuxtjs.dev/pinia
    '@pinia/nuxt',

  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

      // The following that was used in Nuxt3 isnt needed for tailwind to work as under the hood, the tailwind module is already working. Maybe we need to either use the following or use the '@nuxtjs/tailwindcss' module
      // postcss: {
      //   postcssOptions: {
      //     plugins: {
      //       tailwindcss: {},
      //       autoprefixer: {},
      //     },
      //   },
      // },

  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  "types": [
    // ...
    "@pinia/nuxt"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },



})
