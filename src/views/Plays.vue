<template>
    <div class="row">
        <div class="col-4">
                <h3>List Pemain</h3>
            <div class="container" >
                <player v-for="(user, idx) in roomDetail.users" :key="idx" :player="user" :admin="roomDetail.admin"/>
            </div>
        </div>
        <div class="col-8"> 
            <div class="text-center" v-if="isStart === false">
                <div class = "home-box settings text-center">
                    <h1>PLEASE WAIT</h1>
                    <p>your admin will start the game</p>
                    <img src="https://64.media.tumblr.com/0a55bb2d3f8f2d94192bfacd564a7c91/tumblr_neukjoryq51s3lkzpo1_400.gif" alt="" style="height:300px; margin-bottom:20px">
                <div v-if="roomDetail.admin === adminName">
                    <button class="btn btn-danger" @click.prevent="letsPlay">Lets Go</button>
                </div>
                </div>
            </div>
            
            <div v-if="isStart === true">           
                <div id="gambar">
                    <div id="timer"></div>                    
                        <img src="../assets/soal/soal 10.jpg" id="soal" class="img-fluid rounded mx-auto d-block" style="margin-top: 30px; width: 85%;" alt="Responsive image"/>
                </div>
                    <h1 class="hint" id="hint"></h1>
                <br><br><br>
                <div class="d-flex justify-content-center">
                    <input type="text" id="jawaban" placeholder="Famous Celebrity"> 
                    <input type="submit" value="submit" id="ambilJawaban" onclick="getAnswer()">
                </div>
                <div id="myModal" class="modal">
                    <!-- Modal content -->
                    <div class="modal-content">
                    <span class="close">&times;</span>
                    <p id="modalHasil"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import player from '../components/player'
import {mapState} from 'vuex'
export default {
    data () {
        return {
            isStart: false,
            adminName: ''
        }
    },
    methods: {
        letsPlay () {
            this.isStart = true
            this.$socket.emit('letsPlay', this.isStart)
        } 
    },
    sockets: {
        letsPlay (value) {
            this.isStart = value
        }
    },
    components: {
        player
    },
    computed: {
        ...mapState(['roomDetail'])
    },
    created () {
        this.adminName = localStorage.name
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Raleway&display=swap');
.settings {
  max-width: 700px;
  background-color: black;
  margin: 50px auto;
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
  color: white;
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

.for-user {
    display: flex;
    justify-content: flex-start;
}

.for-soal {
    display: flex;
    justify-content: center;
    height: 250px;
}

.for-logo {
    height: 150px;
    display: flex;
    justify-content: center;
}

#gambar {
    position: relative;
    width: 700px;
    height: 400px;
    background: linear-gradient(to bottom, #ffffff 41%, #000066 102%);
    margin: 50px 10%;
    padding-top: 10px;
    padding-bottom: 10px;    
    border: 1px solid white;
    border-radius: 50px;
    -webkit-box-shadow: 11px 17px 16px 4px rgba(0,0,0,0.75);
    -moz-box-shadow: 11px 17px 16px 4px rgba(0,0,0,0.75);
    box-shadow: 11px 17px 16px 4px rgba(0,0,0,0.75);
}

#timer {
    position: absolute;
    font-size: 50px;
    right: 20px;
    margin-right: 30px;
    height: 80px;
    width: 80px;
    background-color: rgb(156, 38, 38);
    border: 1px solid white;
    border-radius: 5px;
}

h3 {
    margin:20px;
}

.hint {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>