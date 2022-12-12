import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles.css'
import Welcome from "./views/Welcome.vue"
import AboutMe from "./views/AboutMe.vue"
import AboutCat from "./views/AboutCat.vue"
import Gallery from "./views/Gallery.vue"
import Portfolio from "./views/Portfolio.vue"
import Contact from "./views/Contact.vue"

//router for different pages
const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/' , component: Welcome},
        {path: '/about' , component: AboutMe},
        {path: '/carrot' , component: AboutCat},
        {path: '/gallery' , component: Gallery},
        {path: '/portfolio' , component: Portfolio},
        {path: '/contact' , component: Contact}
    ],
})
createApp(App)
.use(router)
.mount('#app')
