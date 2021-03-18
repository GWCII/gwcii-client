<template>
  <div class = "home-box settings text-center">
    <h2>{{room.name}}</h2>
    <hr>
    <h4>Admin</h4>
    <p> <avataaars style="width:40px; height:40px"></avataaars> {{room.admin}}</p>
    <h4>Players</h4>
    <div class="card mx-auto" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <player v-for="(player, idx) in room.users" :key="idx" :player="player"/>
      </ul>
    </div>
    <button class="btn btn-danger">JOIN</button>
  </div>
</template>

<script>
import player from './player'
export default {
  name: 'card',
  props: ['room'],
  components: {
    player
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-box h2, .home-box p {
  text-align: center;
  line-height: 40px;
}

.home-box h4{
  margin-top:10px;
  font-weight: 500px;
  color: grey;
}
.btn {
  margin:20px;
}
input{
  text-align: center;
  text-decoration: none;
  padding: 5px 60px;
}
hr { 
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
} 
</style>
