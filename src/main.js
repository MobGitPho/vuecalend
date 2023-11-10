import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
/*watch(
    pinia.state,
     (state) => {
        localStorage.setItem("userdb", JSON.stringify(state.userdb));
        localStorage.setItem("coursdb", JSON.stringify(state.coursdb));
        localStorage.setItem("coursChoix", JSON.stringify(state.coursdb));
        localStorage.setItem("user", JSON.stringify(state.users));
        // state.panier = state.MonPan()  //localStorage.getItem('article');
         
     },
     { deep: true }
 );*/

app.use(pinia)
app.use(router)

app.mount('#app')
