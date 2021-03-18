<template>
    <div>
        <header>
            <div id="logo">
                <img src="../assets/logo.png" alt="this is logo"/>
            </div>
        </header>
        <section>
            <div id="keterangan">
                <p>
                    <strong>Game WHO IS IT?</strong> adalah permainan menebak gambar yang menyimpan sebuah nama tokoh terkenal <br>(aktris, penyanyi, presenter, selebgram dan sebagainya) baik di luar negeri ataupun dalam negeri
                </p>
            </div>
            <div>
                <input type="button" value="Mulai Bermain!!!" class="mulai">
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#logo img {
    width: 150px;
    height: 150px;
}

#keterangan {
    height: 150px;
    background-color: #2596be;
    margin: 5% 20%;
    padding-top: 100px;    
    border: 1px solid #2596be;
    border-radius: 50px;
    -webkit-box-shadow: 13px 18px 23px 1px rgba(45,140,207,1);
    -moz-box-shadow: 13px 18px 23px 1px rgba(45,140,207,1);
    box-shadow: 13px 18px 23px 1px rgba(45,140,207,1);
}

#keterangan p {
    font-size: 18px;
    color: honeydew;
}

.mulai {
    font-weight: bold;
    height: 30px;
    width: 150px;
    background-color: aqua;
    color: rgb(10, 10, 10);
    border: 3px solid aqua;
    border-radius: 10px;
    cursor: pointer;
}

</style>