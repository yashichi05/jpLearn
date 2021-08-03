<template >
  <div class="app">
    <WinHeader></WinHeader>
    <router-view> </router-view>
  </div>
</template>

<script>
import WinHeader from './components/header.vue'
export default {
  components:{
    WinHeader
  }
}
</script>

<style>
</style>
