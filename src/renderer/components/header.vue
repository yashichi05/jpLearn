<template lang="pug">
header
  ul
    li 設定

  ul.win-ctrl
    li(@click="minimize")
    li(@click="close")
      span

</template>

<script>
  import { useService} from '../composables'
export default {
  setup(){
    const { close ,minimize} = useService('WinService')
    return {close,minimize}
  }
}
</script>
<style lang="sass" scoped>
header
  background: #323233
  display: flex
  justify-content: space-between
ul
  font-size: 14px
  padding: 0px 20px
  height: 30px
  display: flex
  color: rgba(255,255,255,0.4)
  li
    padding: 0 5px
    cursor: default
    display: flex
    align-items: center
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
          background: rgba(255,255,255,0.1)
      &:nth-of-type(2)
        span
          display: block
          width: 100%
          opacity: 0.1
          position: relative
          &::before ,&::after
            position: absolute
            content: ''
            height: 2px
            width: 13px
            left: -13%
            top: 50%
            background: #fff
          &::before
            transform: rotate(45deg)
          &::after
            transform: rotate(-45deg)

</style>
