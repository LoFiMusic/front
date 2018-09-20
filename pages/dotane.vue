<template lang="html">
  <div>
    <center>
      <a href="/"><logo/></a>
<br>
      <img src="../static/img/qr-code.png" width="300px" height="300px" alt=""><br>
      <div class="text">
        Thank you! ❤️ <br>
        Daniil Toroshin and Alexey Shamyshev!<br>
      </div>
    </center>
  </div>
</template>

<script>
import logo from '../components/logo.vue'

export default {
  components:{
    logo,
  }

}
</script>

<style lang="sass">
  body
    background-color: #edeef0

  .text
    text-align: center
    position: relative
    font-weight: 100
    margin-top: 25px
    display: inline-block
    font-size: 25px
    font-weight: 300
    color: rgb(23, 23, 23)
</style>
