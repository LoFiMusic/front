<template lang="html">
  <div>
    <center>
    <a href="/"><logo/></a><br>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text">
            Public API url:<br> https://api.lofichan.ru/api/v1/
            <br>
            Service status: <div class="status">
              Online
            </div>
            <br>
            Public Methods:
          </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">URI</th>
              <th scope="col">Methods</th>
              <th scope="col">Descriptions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>playlist/</td>
              <td>GET</td>
              <td>Get all music tracks</td>
            </tr>
            <tr>
              <td>random/</td>
              <td>GET</td>
              <td>Get random music track</td>
            </tr>
            <tr>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  </center>
  </div>
</template>

<script>
import logo from '../components/logo.vue'

export default {
  components:{
    logo,
  },
}
</script>

<style lang="sass">
  body
    background-color: #edeef0

  .status
    color: rgb(86, 191, 3)
    font-weight: 300
    
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
