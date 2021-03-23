import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faGitlab, faGithubAlt, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faArrowLeft, faGitlab, faGithubAlt, faTelegramPlane)

Vue.use(Vuetify)

const icons = {
  telegram: ['fab', 'telegram-plane'],
  github: ['fab', 'github-alt'],
  gitlab: ['fab', 'gitlab'],
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
