import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import VueRouter from 'vue-router'
import { Store } from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import App from "./components/App.vue"

export class CoreModule implements VueModule {
  readonly name = 'core'

  constructor(private router: VueRouter, private store: Store<any>) {}
  
  install(Vue: typeof _Vue) {
    // set dup element ui
    Vue.use(ElementUI, { locale })

    // register Vue
    Vue.prototype.$eventBus = new Vue()

    // render component
    new Vue({
      router: this.router,
      store: this.store,
      el: '#app',
      render: h => h(App),
    })
  }
}