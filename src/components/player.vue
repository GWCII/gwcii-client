<template>
    <div class="card" style="width: 18rem; margin-bottom: 20px">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><avataaars style="width:40px; height:40px"></avataaars>&nbsp;{{player.username}} <span v-if="player.username === admin"> (admin)</span></li>
            <li class="list-group-item">Score : {{player.score}}</li>
        </ul>
    </div>
</template>

<script>
import Avataaars from 'vuejs-avataaars'
export default {
    props: ['player', 'admin'],
    components: {
        Avataaars,
    }
}
</script>

<style>

</style>