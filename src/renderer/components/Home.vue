<template>
  <div>424</div>
</template>

<script lang="js">
import {  reactive, toRefs, onMounted } from 'vue'
import { useClipboard, useShell, useDialog ,useService} from '../composables'
export default {
  setup() {
    const { getBasicInformation } = useService('BaseService')
    onMounted(() => {
      getBasicInformation().then((abc)=>{
        console.log(abc)
      })
    })
  }
}
</script>
