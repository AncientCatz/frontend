import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'
import Particles from 'particles.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import twemoji from 'twemoji'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas, fab)

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
