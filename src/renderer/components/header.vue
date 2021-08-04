<template lang="pug">
header
  ul
    li(@click="openSetting") 設定
  p jpLearn
  ul.win-ctrl
    li(@click="minimize")
    li(@click="close")
      span

teleport(to="body")
  .modal-bg(v-if="setting" @click.self="setting = false")
    .modal-win
      .modal-header
        span(@click="setting = false")
      .modal-body
</template>

<script>
  import { useService} from '../composables'
  import {ref} from 'vue'
export default {
  setup(){
    const { close ,minimize} = useService('WinService')
    const setting = ref(true)
    const openSetting = ()=>{
      setting.value = true
    }
    return {close,minimize,openSetting,setting}
  }
}
</script>
<style lang="sass" scoped>
.modal-bg
  top: 30px
  left: 0
  position: fixed
  width: 100vw
  height: calc(100vh - 30px)
  background: rgba(0,0,0,0.5)
  display: flex
  align-items: center
  justify-content: center
  .modal-win
    width: 80%
    height: 80%
    background: #252526
    .modal-header
      height: 30px
      display: flex
      justify-content: flex-end
      span
        display: block
        flex: 0 0 30px
        opacity: 0.4
        position: relative
        // padding-bottom: 2px
        &:hover
          background-color: rgba(255,255,255,0.1)
        &::before ,&::after
          position: absolute
          content: ''
          height: 2px
          width: 13px
          left: 30%
          top: 50%
          background: #fff
        &::before
          transform: rotate(45deg)
        &::after
          transform: rotate(-45deg)
</style>
<style lang="sass" scoped>
header
  background: #323233
  display: flex
  justify-content: space-between
p
  -webkit-app-region: drag
  font-size: 16px
  display: flex
  align-items: center
  justify-content: center
  color: rgba(255,255,255,0.7)
  pointer-events: none
  width: 100%
ul
  font-size: 14px
  padding: 0px 20px
  height: 30px
  display: flex
  color: rgba(255,255,255,0.7)
  li
    padding: 0 5px
    display: flex
    align-items: center
    white-space: nowrap
    &:hover
      background: rgba(255,255,255,0.1)
  &.win-ctrl
    padding-right: 0
    > li
      padding: 0 15px
      width: 10px
      &:first-of-type
        display: flex
        align-items: center
        justify-content: center
        &::before
          content: ''
          height: 2px
          width: 10px
          background: rgba(255,255,255,0.4)
      &:nth-of-type(2)
        span
          display: block
          width: 100%
          opacity: 0.4
          position: relative
          padding-bottom: 2px
          &::before ,&::after
            position: absolute
            content: ''
            height: 2px
            width: 13px
            left: -13%
            top: 0%
            background: #fff
          &::before
            transform: rotate(45deg)
          &::after
            transform: rotate(-45deg)

</style>
