import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { en } from 'vuetify/locale'

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'en',
    messages: { en }
  }
})

createApp(App).use(createPinia()).use(vuetify).mount('#app')
