/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App)

app.component("ButTon",Button)

app.component('DataTable', DataTable);
app.component('Column', Column);
app.use(PrimeVue);

app.use(createPinia())
app.use(router).mount('#app')
