// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VeeValidate, {Validator} from 'vee-validate'
import es from 'vee-validate/dist/locale/es.js'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

// import alert from 'vue-strap/src/alert'
// or


// window._root_url = 'http://127.0.0.1:8000'
Vue.use(Buefy)
Validator.addLocale(es)
Vue.use(VeeValidate, { locale: 'es' })
Vue.component('icon', Icon)
Vue.config.productionTip = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Icon}
})
