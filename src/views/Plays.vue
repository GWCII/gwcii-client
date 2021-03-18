<template>
<div class="container">
    <br><br>
    <div class="row">
        <div class="col">
            <div class="container">
                <h3 style="display: flex">List Pemain</h3>
            </div>
            <div class="container" >
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale'
    style="height: 40px"/>&nbsp;User 1</li>
                        <li class="list-group-item">Score :</li>
                    </ul>
                </div>
                <br><br>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned'
    style="height: 40px"/>&nbsp;User 2</li>
                        <li class="list-group-item">Score :</li>
                    </ul>
                </div>          
            </div>
        </div>
        <div class="col">            
            <section>
                <div id="gambar">
                    <div id="timer"></div>                    
                        <img src="../assets/soal/soal 10.jpg" id="soal" class="img-fluid rounded mx-auto d-block" style="margin-top: 30px; width: 85%;" alt="Responsive image"/>
                    <p class="hint" id="hint"></p>
                </div>
                <br><br><br>
                <div>
                    <input type="text" id="jawaban" placeholder="nama tokoh terkenal"> &nbsp; &nbsp;
                    <input type="submit" value="submit" id="ambilJawaban" onclick="getAnswer()">
                </div>
                <div id="myModal" class="modal">
                    <!-- Modal content -->
                    <div class="modal-content">
                    <span class="close">&times;</span>
                    <p id="modalHasil"></p>
                    </div>
                </div>
            </section> 
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        soalList () {
           return this.$store.state.soalList
        }
    },
    created () {
        this.$store.dispatch.fetchSoal
        
    },
    mounted () {
        console.log(this.soalList);
    }

}
</script>

<style scoped>

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
    margin: 10px 10%;
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

</style>