
export default {

  router: {
    base: '/covid/',
  },


  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Covid Jharkhand Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },


    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
    
  // ],
  
  plugins: ['~plugins/filters.js','~/plugins/moment.js'],
  
  
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    'nuxt-sweetalert2',
     '@nuxtjs/axios',
    //  '@nuxtjs/firebase',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAo8orCPsOtlfMl_R58g3ZZO4b3vrZlZQc",
          authDomain: "jharkhandcovid-b0fd9.firebaseapp.com",
          databaseURL: "https://jharkhandcovid-b0fd9.firebaseio.com",
          projectId: "jharkhandcovid-b0fd9",
          storageBucket: "jharkhandcovid-b0fd9.appspot.com",
          messagingSenderId: "359659600695",
          appId: "1:359659600695:web:28f2e0d1d53eb58b9db8b2",
          // measurementId: '<measurementId>'
        },
        services: {
         
          firestore: true

        }
      }
    ]


    //  'nuxt-moment',

     // 'nuxt-fontawesome', {
     //    imports: [
     //     {
     //       set: '@fortawesome/free-solid-svg-icons',
     //       icons: ['fas']
     //     },
     //     {
     //       set:'@fortawesome/free-brands-svg-icons',
     //       icons: ['fab']
     //     }
     //   ]
     //  },
      
// ]

  ],
   axios: {
    // proxyHeaders: false
  },

  generate: {
    dir:'docs'
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
