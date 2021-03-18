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
      this.$socket.emit('test', this.name)
      
      this.name = ''
    }
  },
  sockets: {
    test (data) {
      console.log(data);
    }
  }
}
</script>

<style>

</style>