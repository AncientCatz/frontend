<template lang="pug">
  div
    back-button
    section
      h1 Обо мне:
      p Иван Филипенков, 15 лет, программист,!{' '}
        span(style='text-decoration: line-through;') дизайнер
      p Люблю разбираться во всем новом и запутанном
      p Пишу в основном бэкенд сайтов и ботов
      p Живу в Москве
      p Знаю Python, html/css/js, Delphi. Плохо знаю Java/Kotlin, C#
      p Разбираюсь в Windows, Linux, Gitlab CI, Docker
      p Программирую в IDE от JetBrains
      p(v-emoji) За последнюю неделю {{ codedText }} (данные динамичны, обновляются каждый день в ~01:00 🙂)
</template>

<script>
import BackButton from '@/components/BackButton'
import axios from 'axios'

export default {
  name: 'About',
  components: {BackButton},
  data() {
    return {
      codedText: '...'
    }
  },
  mounted() {
    axios.get(process.env.VUE_APP_API_URI + '/code_stats')
      .then((resp) => {
        this.codedText = resp.data
      })
      .catch(() => {
        this.codedText = '⚠️ошибка загрузки⚠️'
      })
  }
}
</script>

<style scoped lang="stylus">
section
  padding 0 1rem
  max-width 800px
  margin 0 auto
  align-self center

p
  font-size 1.5rem
h1
  font-size 2.5rem
</style>
