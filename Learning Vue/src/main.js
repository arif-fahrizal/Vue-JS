import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import OptionsComponent from './components/OptionsComponent.vue'
import CompositionComponent from './components/CompositionComponent.vue'

const app = createApp(App)

// Global Component
app
  .component('OptionsComponent', OptionsComponent)
  .component('CompositionComponent', CompositionComponent)

app.mount('#app')
