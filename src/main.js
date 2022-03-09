import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import { VueCookieNext } from 'vue-cookie-next'
import VueSocialSharing from 'vue-social-sharing'
import { createMetaManager, plugin as metaPlugin } from "vue-meta";
import lazyPlugin from 'vue3-lazy'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

const metaManager = createMetaManager();
axios.defaults.baseURL = 'https://www.hagega.com/Al-hagegaAPI/APIs/'

const loadimage = require('./assets/Webp.png')

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(VueCookieNext)
    .use(VueSocialSharing, {
        networks: {
            facebook: 'https://facebook.com/share?url=@url&title=@title'
        }
      })
    .use(metaManager)
    .use(metaPlugin)
    .use(lazyPlugin, {
      preLoad: 1.3,
      loading: loadimage,
      attempt: 1
      // loading: 'loading.png',
      // error: 'error.png'
    })
    .use(VueLoading)
    .mount('#app')
