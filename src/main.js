import Vue from 'vue'
import App from './App.vue'

// import {create} from '@/utils/create'

// 
import {extendTest} from '@/utils/extendTest.js'

import Notice from '@/components/Notice'

Vue.prototype.$notice = (opts) => {
  const comp = extendTest(Notice, opts)
  comp.show()
  return comp
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
