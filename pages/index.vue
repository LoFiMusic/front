<template>
<div>
  <loader v-if="loading">
  </loader>
  <div v-else>
    <div class="theme__overlay theme " :class="{'activeAnime': !wave}">
      <center>
        <div class="blur_pic">
          <div v-if="pic == 'none_pic'">
            <img class="cover" src="../static/img/unknow_cover.png" width="150px" style="border-radius: 5px" alt="">
          </div>
          <div v-else>
            <img class="cover" :src="'https://st.lofichan.ru/'+ pic" width="150px" style="border-radius: 5px" alt="">
          </div>
        </div>
        </center>
    </div>
    <div class="topking col-12">
      <center>
        <logo/>
      </center>

        <center>
                  <div v-if="pic == 'none_pic'">
                    <img class="cover" src="../static/img/unknow_cover.png" width="300px" style="border-radius: 5px" alt="">
                  </div>
                  <div v-else>
                    <img class="cover" :src="'https://st.lofichan.ru/'+ pic" width="300px" style="border-radius: 5px" alt="">
                  </div>
          </center>
<!-- AUDIO  -->
      <audio id="mainPlayer" ref="a" preload="none">
      <source :src="'https://st.lofichan.ru/'+src" ref="audioSource" />
      </audio>
<!-- AUDIO  -->
  <center>
      <div class="txt">
        {{title}} - {{artist}}
      </div>
      <center>
      <div class="playclass col-1">
        <div @click="play" class="play">
         <div v-if="Playing == true">
           <play/>
         </div>
         <div v-else>
           <pause/>
         </div>
        </div>
      </div>
      <div class="playclass col-1">
        <next @click.native="next"/>
      </div>
    </center>
    <div class="volume_s">
      <div class="sound_left" style="display: inline-block;">
        <img @click="disableVolume"  src="../static/icons/Shape57.svg" width="11px" alt="">
      </div>
      <input id="volume" class="slider" v-model="volumeData" @click="volumeControl"  type="range" min="0.1" max="1" step="0.1" value="1">
      <div v-if="!volumeDisable" style="display: inline-block;">
        <img class="sound_right" src="../static/icons/Shape56.svg" width="15px" alt="">
      </div>
      <div v-else style="display: inline-block;">
        <img class="sound_right" src="../static/icons/Shape58.svg" width="15px" alt="">
      </div>
    </div>
    <br>
    <br>
      <div class="love_txt">
        Ваша <like @click.native="like"/> может быть безгранична:
      </div>
      {{lukas}}
    </center>
  </div>
<bottomPanel/>
  </div>
    </div>
</template>

<script>

import loader from '../components/loader.vue'
import logo from '../components/logo.vue'
import NoSSR from 'vue-no-ssr'
import play from '../components/items/play.vue'
import pause from '../components/items/pause.vue'
import like from '../components/items/like.vue'
import next from '../components/items/next.vue'
import bottomPanel from '../components/bottomPanel.vue'

export default {
  components: {
    'no-ssr': NoSSR,
    loader,
    logo,
    play,
    pause,
    like,
    next,
    bottomPanel,
  },
  computed: {
    artist () {
      if (this.$store.state.random.items[0]) {
        return this.$store.state.random.items[0].artist
      }
      else {
        return null
      }
    },
    pic () {
      if (this.$store.state.random.items[0]) {
        return this.$store.state.random.items[0].pic
      }
      else {
        return null
      }
    },
    src () {
      if (this.$store.state.random.items[0]) {
        return this.$store.state.random.items[0].src
      }
      else {
        return null
      }
    },
    title () {
      if (this.$store.state.random.items[0]) {
        return this.$store.state.random.items[0].title
      }
      else {
        return null
      }
    },
    likes () {
      if (this.$store.state.random.items[0]) {
        return this.$store.state.random.items[0].likes
      }
      else {
        return null
      }
    },
  },
  mounted() {
    this.$store.dispatch('random/getRandom')
    .then(res => {
      this.lukas = this.likes
      this.loading = false

      this.$nextTick(() => {
        // this.$store.dispatch('main/getMain')
        var song = document.getElementById("mainPlayer");
        song.onended = this.next.bind(this)
      })
    })
    .catch(() => {
      this.loading = true
    })
    setTimeout(() => {
      this.form.id = this.$store.state.random.items[0].id
    },50)

  },

  data () {
    return {
      Playing: true,
      loading: true,
      volumeData: '',
      volumeDisable: false,
      duration: '',
      wave: false,
      lukas: '',
      form: {
        id: '',
      },
    }
  },
  methods: {
    id_in () {
      if (this.$store.state.random.items[0]) {
        return this.$store.state.random.items[0].id
      }
      else {
        return null
      }
    },
    play() {
      var song = document.getElementById("mainPlayer");
      song.paused? song.play() : song.pause();
      this.Playing? this.Playing = false: this.Playing = true;
    },
    disableVolume (){
      var song = document.getElementById("mainPlayer");
      song.volume? song.volume=0.0 : song.volume=0.3;
      this.volumeDisable=!this.volumeDisable;
    },
    next(){
      var song = document.getElementById("mainPlayer");
      song.pause();
      song.currentTime = 0;
      const { audioSource } = this.$refs
      this.lukas = this.likes

      this.$store.dispatch('random/getRandom')
      .then(res => {
        audioSource.src = 'https://st.lofichan.ru/' + this.src
        song.load();
        song.play();
        this.Playing = false;
      })

    },
    volumeControl (){
      var song = document.getElementById("mainPlayer");
      song.volume=this.volumeData;
      this.volumeDisable=false;
    },
    like (){
      console.log(this.form)
      this.$store.dispatch('random/postLike', {id: this.form.id})
      this.lukas++
    },
}
}
</script>

<style lang="sass">
@import ../assets/css/base.sass


.footer
  flex: 0 0 auto

.txt
  font-size: 20px
  margin-top: 10px
  margin-bottom: 10px


.sound_left
  vertical-align: middle
  margin-top: 5px
  margin-right: 10px

.sound_left:hover
  cursor: pointer

.sound_right
  vertical-align: middle
  margin-top: 5px
  margin-left: 10px

.links
  padding-top: 15px

.cover
  max-width: 150px
  max-height: 150px
  min-width: 150px
  min-height: 150px

.likeclass
  font-size: 20px
  margin-left: 15px
  margin-bottom: 25px


.playclass
  width: 40px
  height: 40px
  background-repeat: no-repeat
  margin-top: 15px
  display: inline-block

.volume_s
  display: inline-block
  margin-left: 15px

.pause

.nextTrack

.prevTrack

.love_txt
  font-size: 11px

body
  -moz-background-size: 100%
  -webkit-background-size: 100%
  -o-background-size: 100%
  background-size: 100%
  background-color: rgb(0, 0, 0)

  .theme__overlay
      will-change: opacity
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      // background-color: #50505099
      -webkit-background-size: cover
      -moz-background-size: cover
      background-size: cover
      -webkit-filter: blur(70px)
      filter: blur(70px)
      -webkit-transition: opacity 1.5s ease-in-out
      -moz-transition: opacity 1.5s ease-in-out
      -o-transition: opacity 1.5s ease-in-out
      -ms-transition: opacity 1.5s ease-in-out
      transition: opacity 1.5s ease-in-out
      opacity: .8
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)"
      filter: alpha(opacity=80)


  @-webkit-keyframes BackGraf
    0%
      background-position: 19% 0%

    50%
      background-position: 82% 100%

    100%
      background-position: 19% 0%


  @-moz-keyframes BackGraf
    0%
      background-position: 19% 0%

    50%
      background-position: 82% 100%

    100%
      background-position: 19% 0%


  @keyframes BackGraf
    0%
      background-position: 19% 0%

    50%
      background-position: 82% 100%

    100%
      background-position: 19% 0%




  .theme
    display: -webkit-box
    display: -moz-box
    display: -webkit-flex
    display: -ms-flexbox
    display: box
    display: flex
    -webkit-box-pack: center
    -moz-box-pack: center
    -o-box-pack: center
    -ms-flex-pack: center
    -webkit-justify-content: center
    justify-content: center
    -webkit-box-align: center
    -moz-box-align: center
    -o-box-align: center
    -ms-flex-align: center
    -webkit-align-items: center
    align-items: center
    width: 100%
    min-height: 100%
    -webkit-background-size: cover
    -moz-background-size: cover
    background-size: cover
    z-index: 0
    background: linear-gradient(141deg, #29383d, #b45d5d, #b46bad, #1b8e9e, #252622)
    background-size: 800% 800%


  .activeAnime
    animation: BackGraf 29s ease infinite


  .topking
    z-index: 100

  .blur_pic
    z-index: 0
</style>
