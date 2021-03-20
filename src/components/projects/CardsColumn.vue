<template lang="pug">
  div.cards-col
    h1.cards-col-header {{ title }}
    div.cards-col-items
      div.cards-col-inner
        v-card(v-for='card in cards' :key="card.title")
          v-card-title {{ card.title }}
          v-card-text(v-html='card.description')
          v-card-actions
            v-btn(color="secondary" v-if='card.buttons' v-for='btn in card.buttons' :key='btn.title' :href='btn.href' target='_blank') {{ btn.title }}
</template>

<script>
export default {
  name: 'CardsColumn',
  props: ['title', 'cards'],
}
</script>

<style scoped lang="stylus">
.cards-col-header
  text-align center

.cards-col
  @media screen and (min-width: 1400px)
    height calc(100vh - 60px)
  display: flex;
  flex-direction: column;

.cards-col-items
  overflow auto
  display flex
  flex-direction column
  padding-right 3px

.cards-col-inner > *
  margin .5rem 0

</style>
