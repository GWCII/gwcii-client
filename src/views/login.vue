<template>
<div>
  <div class = "home-box settings text-center">
        <h1>Guess What Celebrity is it</h1>
        <p>Are you ready?</p>
        <input type="text" id= "fname" placeholder="Type your name"><br> <br>
        <button class="btn btn-danger">ENTER</button>
    </div>
</div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
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
