import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  modern: process.env.NODE_ENV === 'production' ? 'client' : false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Manoah's Portfolio",
    title: 'home',
    link: [
      {
        rel: 'sitemap',
        type: 'application/xml',
        title: 'Sitemap',
        href: '/sitemap.xml',
      },
      { rel: 'canonical', href: 'https://manoahtervoort.tk' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-netlify',
    '@nuxtjs/imagemin',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-protected-mailto',
    'nuxt-webfontloader',
    'nuxt-precompress',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://manoahtervoort.tk',
  },

  netlify: {
    headers: {
      '/*': [
        'Permissions-Policy: camera=(), display-capture=(), document-domain=(), geolocation=(), microphone=(), payment=(), usb=()',
        "Content-Security-Policy: default-src 'none'; style-src 'self' 'unsafe-inline'; script-src 'self' https://cdn.jsdelivr.net; img-src data: 'self'; connect-src 'self'; manifest-src 'self';",
      ],
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: "Manoah's Portfolio",
      description: 'The developer portfolio of Manoah Tervoort.',
      theme_color: colors.blue.darken2,
      ogHost:
        process.env.NODE_ENV === 'production'
          ? 'https://manoahtervoort.tk/'
          : 'http://localhost:3000/',
    },
    manifest: {
      lang: 'en',
      name: "Manoah's Portfolio",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: {
      icons: false,
    },
    treeShake: {
      loaderOptions: {
        progressiveImages: {
          sharp: true,
        },
      },
    },
    optionsPath: './vuetify.options.js',
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.blue.accent1,
          secondary: colors.grey.darken3,
          info: colors.blue,
          warning: colors.amber,
          error: colors.red.accent2,
          success: colors.green,
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.blue,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
    html: {
      minify: {
        decodeEntities: false,
      },
    },
  },
}
