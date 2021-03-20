import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

Vue.use(Vuetify)

const icons = {
  telegram: ['fab', 'telegram-plane'],
  github: ['fab', 'github-alt'],
  gitlab: ['fab', 'gitlab'],
  sun: ['fas', 'sun'],
  moon: ['fas', 'moon'],
  back: ['fas', 'arrow-left'],
}

let vuetifyConfig = {
  icons: {
    values: {},
  },
}

for (const [k, v] of Object.entries(icons)) {
  vuetifyConfig.icons.values[k] = {
    component: FontAwesomeIcon,
    props: {
      icon: v,
    },
  }
}

export default new Vuetify(vuetifyConfig)
