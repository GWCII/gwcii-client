<template>
  <div class="container text-center">
      <h1>WELCOME TO GWCII</h1>
    <div>
      <input class="text-center" type="text" placeholder="Create Room" v-model="roomName" v-on:keyup.enter="createRoom">
    </div>
    <card v-for="(room, idx) in rooms" :key="idx" :room="room"/>
  </div>
</template>

<script>
import card from '../components/card'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      roomName: ''
    }
  },
  components: {
    card
  },
  methods: {
    createRoom () {
      let dataRoom = {
        name: this.roomName,
        admin: localStorage.name
      }
      this.$socket.emit('createRoom', dataRoom)
      this.roomName = ''
    }
  },
  computed: {
    ...mapState(['rooms'])
  },
  created () {
    this.$socket.emit('getRooms')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Raleway&display=swap');
.settings {
  max-width: 450px;
  background-color: white;
  margin: 30px auto;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 32px 1px rgba(184, 182, 182, 0.75);
  -webkit-box-shadow: 1px 1px 32px 1px rgba(151, 151, 151, 0.75);
  -moz-box-shadow: 1px 1px 32px 1px rgba(138, 138, 138, 0.75);
  animation: fadeInRight 1s ease;
}
@keyframes fadeInRight{
  0%{
    transform: translateX(40px);
    opacity: 0;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>