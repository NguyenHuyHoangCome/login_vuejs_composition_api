import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'


const app = createApp(App)

app.component("ButTon",Button)

app.use(PrimeVue);

app.use(createPinia())
app.use(router).mount('#app')
