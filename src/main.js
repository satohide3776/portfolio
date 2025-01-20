import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faHouse,
  faAddressCard,
  faPersonChalkboard,
  faEnvelope,
  faLaptopCode,
  faSchool,
 } from '@fortawesome/free-solid-svg-icons'

library.add(
  faHouse,
  faAddressCard,
  faPersonChalkboard,
  faEnvelope,
  faLaptopCode,
  faSchool,
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
