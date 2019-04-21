import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import messages from './i18n';
import MainLayout from './layouts/MainLayout.vue';
import PreviewLayout from './layouts/PreviewLayout.vue';
import GeneralSection from './components/GeneralSection.vue';
import './QuasarComponents';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.component('MainLayout', MainLayout);
Vue.component('GeneralSection', GeneralSection);
Vue.component('PreviewLayout', PreviewLayout);

const i18n = new VueI18n({
  locale: 'es-mx',
  fallbackLocale: 'es-mx',
  messages,
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
