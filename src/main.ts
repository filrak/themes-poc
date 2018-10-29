import Vue from 'vue';
import Theme from './theme'

Vue.config.productionTip = false;

Theme.register()

new Vue({
  render: (h) => h(Theme.entry),
}).$mount('#app');
