module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Lofi Music Chanel - музыкальный канал в стиле LOFI',
    meta: [
      { name: "google-site-verification", content: "Tx504EamOK3cSMxmrS4fgpbMEAc7v5h1-doGcHu8WX4" },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'LofiChanMusicChanel' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    css: [
      {
        src: '~/assets/css/base.sass'
      }
    ],
    plugins: [
      '~/plugins/index.js',
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ff3b3b' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
