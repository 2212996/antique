export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '隠れ家パーソナルジム ANTIQUE',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'パーソナルジムANTIQUEでは，管理栄養士の資格を持つプロトレーナーがお客様一人ひとりに合わせたトレーニングとお食事内容を提案します．業界大手出身の経験を生かし，お客様の理想の体づくりをサポートいたします．' },
      { hid: 'og:site_name', property: 'og:site_name', content: ''},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:title', property: 'og:title', content: 'パーソナルジムANTIQUE'},
      { hid: 'og:description', property: 'og:description', content: 'パーソナルジムANTIQUEでは，管理栄養士の資格を持つプロトレーナーがお客様一人ひとりに合わせたトレーニングとお食事内容を提案します．業界大手出身の経験を生かし，お客様の理想の体づくりをサポートいたします．'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    description: 'パーソナルジムANTIQUEでは，管理栄養士の資格を持つプロトレーナーがお客様一人ひとりに合わせたトレーニングとお食事内容を提案します．業界大手出身の経験を生かし，お客様の理想の体づくりをサポートいたします．'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-mq'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
