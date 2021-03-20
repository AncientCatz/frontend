<template lang="pug">
  div
    back-button
    section
      div.cards-row
        cards-column(title='Рабочие проекты' :cards='cards.active')
        cards-column(title='В разработке/идеи' :cards='cards.inProgress')
        cards-column(title='Замороженые/заброшенные' :cards='cards.frozen')
        cards-column(title='Хостинг (не мои проекты на моем сервере)' :cards='cards.hosting')
</template>

<script>
import BackButton from '@/components/BackButton'
import CardsColumn from '@/components/projects/CardsColumn'
import cards from '@/assets/cards'

export default {
  name: 'Projects',
  components: {CardsColumn, BackButton},
  data() {
    return {
      cards: cards,
    }
  },
}
</script>

<style scoped lang="stylus">
.cards-row
  display flex
  flex-direction row
  flex-wrap wrap

  @media screen and (min-width: 800px)
    *:nth-of-type(1)
      padding-left 1.5rem

    @media (max-width: 1400px)
      *:nth-of-type(3)
        padding-left 1.5rem

  *
    @media screen and (max-width: 800px)
      padding 0 2.5rem
    @media screen and (max-width: 576px)
      padding 0 1rem
    width 100%
    @media screen and (min-width: 800px)
      padding-right 1.5rem
      width 50%
    @media screen and (min-width: 1400px)
      width 25%
</style>
