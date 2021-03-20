<template lang="pug">
  v-btn(light fab small elevation='10' to='/')
    v-icon $vuetify.icons.back
</template>

<script>
export default {
  name: 'BackButton',
}
</script>

<style scoped lang="stylus">
a
  margin-left 1rem
  margin-top 1rem
</style>
