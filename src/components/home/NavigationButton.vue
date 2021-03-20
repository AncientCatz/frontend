<template lang="pug">
  v-btn(elevation='10' :to='to')
    slot
</template>

<script>
export default {
  name: 'NavigationButton',
  props: ['to']
}
</script>
