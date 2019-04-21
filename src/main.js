import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import messages from './i18n';
import MainLayout from './layouts/MainLayout.vue';
import LoginLayout from './layouts/LoginLayout.vue';
import PublicLayout from './layouts/PublicLayout.vue';
import PreviewLayout from './layouts/PreviewLayout.vue';
import GeneralSection from './components/GeneralSection.vue';
import './QuasarComponents';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueI18n);

Vue.component('MainLayout', MainLayout);
Vue.component('LoginLayout', LoginLayout);
Vue.component('PublicLayout', PublicLayout);
Vue.component('PreviewLayout', PreviewLayout);
Vue.component('GeneralSection', GeneralSection);

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
