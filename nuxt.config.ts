// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo'
  ],

  tailwindcss: {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ]
  },

  googleFonts: {
    families: {
      Barlow: {
        wght: [300, 400, 500, 600, 700]
      }
    }
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  plugins: [
    '~/plugins/fontawesome.js'
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    }
  },

  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
})
