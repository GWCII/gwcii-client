<template>
    <div>
        <header>
            <div id="logo">
                <img src="../assets/logo.png" alt="this is logo"/>
            </div>
        </header>
        <section>
            <div id="gambar">
                <div id="timer"></div>
                <img src="../assets/soal/soal 1.jpg" id="soal" alt="ini soal"/>
                <p class="hint" id="hint"></p>
            </div>
            <div>
                <input type="text" id="jawaban" placeholder="nama tokoh terkenal">
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
</template>

<script>
export default {

}
</script>

<style>

</style>