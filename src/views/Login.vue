<template>
  <div class = "home-box settings text-center">
        <typical
        :steps="['GWCII', 1000, 'Guess What Celebrity is it', 500]"
        :wrapper="'h1'"
      ></typical>
      <typical
        class="typicalWrapper"
        :steps="['Are you ready?', 5000, 'Enjoy The game! 👋', 1000]"
        :loop="Infinity"
        :wrapper="'h4'"
      ></typical>
        <input v-model="name" type="text" id= "fname" placeholder="Type your name" required><br> <br>
        <button class="btn btn-danger" @click.prevent="login">ENTER</button>
  </div>
</template>

<script>
import typical from "vue-typical";

export default {
  data() {
    return {
      name: '',
    }
  },
  components: {
    typical,
  },
  methods: {
    login () {
      localStorage.setItem('name', this.name)
      this.$socket.emit('login', this.name)
      this.$router.push('/lobby')
      this.name = ''
    }
  },
  sockets: {
    login (data) {
      console.log(data);
    }
  },
  created () {
    localStorage.removeItem('name')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Raleway&display=swap');
.settings {
  max-width: 700px;
  background-color: #9da3a7;
  margin: 150px auto;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 32px 1px rgba(0,0,0,0.75);
  -webkit-box-shadow: 1px 1px 32px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 32px 1px rgba(0,0,0,0.75);
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
.home-box h1, .home-box p {
  text-align: center;
  line-height: 40px;
}
.home-box h1 {
  font-weight: 500px;
}
.home-box p {
  font-weight: 500px;
}
.home-box input{
  text-align: center;
  text-decoration: none;
  padding: 5px 60px;
}
</style>