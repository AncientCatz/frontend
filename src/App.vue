<template lang="pug">
  v-app#app
    Particles#page-bg(:options='particlesConfig' v-if="this.$router.currentRoute.path !== '/projects'")
    transition(name='fade')
      router-view
</template>

<script>
import particlesConfig from '@/assets/particles.json'

export default {
  name: 'App',
  data() {
    return {
      particlesConfig: particlesConfig,
    }
  },
  mounted() {
    this.$vuetify.theme.dark = true
  },
}
</script>

<style lang="stylus">
@import 'fonts.css'
html
  overflow auto !important

body
  font-family 'Roboto', sans-serif

body, .v-card__title
  word-wrap break-word !important
  word-break break-word !important

.v-application--wrap
  height fit-content

body, #app, #page-bg
  height 100%
  width 100%
  text-align left

#page-bg
  position fixed
  left 0
  top 0

img.emoji
  height 1em
  width 1em
  margin 0 .05em 0 .1em
  vertical-align -0.1em

::-webkit-scrollbar
  width 8px
  height 8px
  background-color #ccc
  border-radius 10px


::-webkit-scrollbar-thumb
  border-radius 10px
  background-color #777
  border solid 3px transparent


::-webkit-scrollbar-track
  -webkit-box-shadow inset 0 0 3px rgba(0,0,0,0.5)

</style>
