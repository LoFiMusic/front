<template lang="html">
      <div class="f00ter">
            <center>
              <a class="footer_link" target="_blank" href="/api">API</a>
              <a class="footer_link" target="_blank" href="https://t.me/lofi_music">Telegram</a>
              <a class="footer_link" target="_blank" href="/dotane">Donate</a>
              <div class="text">
                v.{{version}}  ❤️ <a class="footer_link" target="_blank" href="https://github.com/LoFiMusic"><img class="github" src="../static/img/github.svg" width="15px" alt=""></a>
              </div>
              <div class="footer_link">
                <div v-if="this.$parent.wave">
                  <img @click="disableWave" style="margin-top: 5px;" src="../static/wave_color.svg" width="15px" alt="Включи красоту">
                </div>
                <div v-else>
                  <img @click="disableWave" style="margin-top: 5px;" src="../static/wave_w.svg" width="15px" alt="Выключи красоту">
                </div>
              </div>
            </center>
      </div>
</template>

<script>

export default {
components: {
},
computed: {
  version () {
    if (this.$store.state.main.items.version) {
      return this.$store.state.main.items.version
    }
    else {
      return null
    }
  },
},
mounted() {
  this.$store.dispatch('main/getMainPage')
},
methods: {
  disableWave() {
  this.$parent.wave = !this.$parent.wave
},
}

}
</script>

<style lang="sass">

.inline-block
  display: inline-block

.github
  vertical-align: middle
  margin-bottom: 4px

.f00ter
  position: absolute
  left: 0
  bottom: 0
  width: 100%
  height: 70px
  background-color: rgba(255, 255, 255, 0)
  display: inline-block

.logoBot
  width: 150px
  height: 50px
  margin-top: 13px
  text-align: center

.footer_link
  margin-left: 5px
  margin-right: 5px
  font-size: 11px
  display: inline-block
  vertical-align: middle

.footer_link:hover
  cursor: pointer

.text
  text-align: left
  position: relative
  font-weight: 100
  margin-left: 30px
  margin-top: 25px
  display: inline-block
  font-size: 11px
  color: rgb(255, 255, 255)

a:link
  color: #fafafa
  font-size: 12px
  text-decoration: none
  font-size: 11px


a:visited
  color: #fafafa
  text-decoration: none
  font-size: 11px


a:hover
  color: rgba(252, 0, 83, 0.87)
  text-decoration: none
  font-size: 11px


a:active
  color: rgba(255, 144, 144, 0.87)
  text-decoration: none
  font-size: 11px


a.posts_head_link
  font-size:  11px!important
  color: rgba(0,0,0,.84)!important
  fill: rgba(0,0,0,.84)!important
  font-size: 11px


a.posts_body_link
   font-size: 14px
   color: rgba(0,0,0,.54)!important
   fill: rgba(0,0,0,.54)!important
   font-size: 11px


// @media all and (max-width: 639px)
//   .text
//       margin-bottom: 25px
//
//   .logoBot
//     margin-left: 30%

</style>
