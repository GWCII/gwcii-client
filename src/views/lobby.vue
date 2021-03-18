<template>
  <div class="container text-center">
    <div>
      <h1>LIST ROOM</h1>
      <input type="text" placeholder="Create Room">
    </div>
      <div class = "home-box settings text-center">
        <h2>Makan kentut</h2>
        <hr>
        <h4>Admin</h4>
        <p> <avataaars style="width:40px; height:40px"></avataaars> lorem ipsum</p>
        <h4>Players</h4>
        <div class="card mx-auto" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> <avataaars style="width:40px; height:40px"></avataaars> Cras justo odio</li>
            <li class="list-group-item"> <avataaars style="width:40px; height:40px"></avataaars> Cras justo odio</li>
            <li class="list-group-item"> <avataaars style="width:40px; height:40px"></avataaars> Cras justo odio</li>
            <li class="list-group-item"> <avataaars style="width:40px; height:40px"></avataaars> Cras justo odio</li>
          </ul>
        </div>
        <button class="btn btn-danger">JOIN</button>
    </div>
     <div class = "home-box settings text-center">
        <h1>Guess What Celebrity is it</h1>
        <p>Are you ready?</p>
        <input type="text" id= "fname" placeholder="Type your name"><br> <br>
        <button class="btn btn-danger">ENTER</button>
    </div>
  </div>
</template>

<script>
import Avataaars from 'vuejs-avataaars'

export default {
  components: {
    Avataaars
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