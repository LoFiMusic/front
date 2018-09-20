<template lang="html">
<div>
  <audio id="mainPlayer" autoplay="autoplay">
<source :src="'https://st.lofichan.ru/'+src" />
</audio>
  <div @click="play" class="play">
   <div v-if="Playing == true">
     <img src="../static/icons/Shape52.svg" alt="">
   </div>
   <div v-else>
     <img class="cover" src="../static/icons/Shape53.svg" alt="">
   </div>
  </div>
  <div v-if="pic == 'none_pic'">
    <img class="cover" src="../static/img/unknow_cover.png" width="110px" style="border-radius: 5px" alt="">
  </div>
  <div v-else>
    <img class="cover" :src="'https://st.lofichan.ru/'+ pic" width="110px" style="border-radius: 5px" alt="">
  </div>
<div class="">
  {{title}} - {{artist}}
</div>
<input id="volume" class="volume__range" v-model="volumeData" @click="volumeControl"  type="range" min="0.1" max="1" step="0.1" value="1">
</div>
</template>

<script>

export default {
  components: {
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
  },
  mounted() {
    this.$store.dispatch('random/getRandom')
    .then(res => {
      this.loading = false
    })
    .catch(() => {
      this.loading = true
    })
  },

  data () {
    return {
      Playing: true,
      loading: true,
      volumeData: '',
    }
  },
  methods: {
    play() {
      var song = document.getElementById("mainPlayer");
      song.paused? song.play() : song.pause();
      console.log(this.$store.state.random.items[0].src)
      this.Playing? this.Playing = false: this.Playing = true;
    },
    volumeControl (){
      var song = document.getElementById("mainPlayer");
      song.volume=this.volumeData;
    }
}
}
</script>

<style lang="sass">
  .cover
    max-width: 110px
    max-height: 110px

  .playclass
    width: 40px
    height: 40px
    background-repeat: no-repeat


  .pause

  .nextTrack

  .prevTrack


</style>
