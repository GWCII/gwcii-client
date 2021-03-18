<template>
  <div id="app">
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
        <input v-model="name" type="text" id= "fname" placeholder="Type your name"><br> <br>
        <button class="btn btn-danger" @click.prevent="login">ENTER</button>
  </div>
    <router-view/>
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
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}
body {
  font-size: 16px;
  background-image: url("./assets/sample-pattern.png");
  max-height: 1000px;
  /* background-color: black; */
  font-family: 'Slabo 27px', serif;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}
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
.settings::before,
.settings::after {
  content: '';
  clear: both;
  display: table;
}
.settings.hide, .btn.hide, .info.hide, .result-box.hide{
  display: none;
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
