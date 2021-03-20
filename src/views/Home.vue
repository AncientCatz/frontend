<template lang="pug">
  section
    div(class="section-inner")
      h0 vanutp
      div#social-row
        social-button(icon='telegram' href='tg://resolve?domain=vanutp')
        social-button(icon='gitlab' href='https://git.vanutp.dev/vanutp')
        social-button(icon='github' href='https://github.com/vanutp')
      div#navigation-row
        navigation-button(to='/about') Обо мне
        navigation-button(to='/projects') Проекты
</template>

<script>
import h0 from '@/components/home/h0'
import SocialButton from '@/components/home/SocialButton'
import NavigationButton from '@/components/home/NavigationButton'

export default {
  name: 'Home',
  components: {NavigationButton, SocialButton, h0},
}
</script>

<style scoped lang="stylus">
section
  position fixed
  height 100%
  width 100%
  display flex
  align-items center
  justify-content center
  padding 0 1rem
  overflow auto
  text-align center
  user-select none

.section-inner
  display flex
  flex-direction column
  text-align center

#social-row > *
  margin 0 .3rem 1rem .3rem

#navigation-row
  display flex
  flex-direction column
  max-width 100px
  align-self center

#navigation-row > *
  margin-bottom .5rem
</style>
