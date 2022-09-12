import { createApp } from 'vue'
import {SetupCalendar,Calendar,DatePicker} from 'v-calendar'
import 'v-calendar/dist/style.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faRightToBracket,faUser,faList,faPlus,faDoorOpen,faCalendar,faCalendarAlt,
faPencilAlt,faTrashAlt,faBan,faTimes, faEllipsis,faHamburger,faBars,faGear,faFingerprint} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'


library.add([faRightToBracket,faUser,faList,faPlus,faDoorOpen,faCalendar,faPencilAlt,faCalendarAlt,
faTrashAlt,faBan,faTimes,faEllipsis,faFacebookSquare,faInstagramSquare,faTwitterSquare,faGear,faFingerprint,faLinkedinIn,faHamburger,faBars])

createApp(App).use(router).use(store).use(SetupCalendar).component('Calendar', Calendar).component('Datepicker',DatePicker).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

