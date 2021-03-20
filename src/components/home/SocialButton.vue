<template lang="pug">
  v-btn(fab elevation='10' :href='href' target='_blank')
    v-icon(large) $vuetify.icons.{{ icon }}
</template>

<script>
export default {
  name: 'SocialButton',
  props: ['href', 'icon']
}
</script>
