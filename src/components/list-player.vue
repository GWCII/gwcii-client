<template>
  <li class="list-group-item"> <avataaars style="width:40px; height:40px"></avataaars> {{ player.username }}</li>
</template>

<script>
import Avataaars from 'vuejs-avataaars'
export default {
  props: ['player'],
  components: {
    Avataaars
  }
}
</script>

<style>

</style>