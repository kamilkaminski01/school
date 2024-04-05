import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { inject } from '@vercel/analytics'
import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import bash from 'highlight.js/lib/languages/bash'
import plaintext from 'highlight.js/lib/languages/plaintext'
import yaml from 'highlight.js/lib/languages/yaml'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'

import App from './App.vue'
import router from './router'

hljs.registerLanguage('plaintext', plaintext)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('dockerfile', dockerfile)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)

app.mount('#app')
inject()
