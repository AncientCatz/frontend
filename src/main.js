import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'
import Particles from 'particles.vue'
import twemoji from 'twemoji'

Vue.config.productionTip = false

Vue.use(Particles)
Vue.directive('emoji', {
  componentUpdated (el) {
    el.innerHTML = twemoji.parse(el.innerHTML)
  },
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
