import Vue from 'vue';
import Router from 'vue-router';
import lazyLoading from './lazyLoading';
import Auth from './Auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Auth(lazyLoading('Home')),
    },
    {
      path: '/quotations',
      component: Auth(lazyLoading('Quotations')),
    },
    {
      path: '/quotations/create',
      component: Auth(lazyLoading('Quotations/Create')),
    },
    {
      path: '/quotations/:id',
      component: Auth(lazyLoading('Quotations/Create')),
    },
    {
      path: '/quotations/:id/preview',
      component: Auth(lazyLoading('Quotations/Preview')),
    },
    {
      path: '/cotiza',
      component: lazyLoading('PublicQuotation'),
    },
    {
      path: '/users',
      component: Auth(lazyLoading('Users')),
    },
    {
      path: '/profile',
      component: Auth(lazyLoading('Profile')),
    },
    {
      path: '/products',
      component: Auth(lazyLoading('Products')),
    },
    {
      path: '/products/create',
      component: Auth(lazyLoading('Products/Create')),
    },
    {
      path: '/products/:id',
      component: Auth(lazyLoading('Products/Edit')),
    },
    {
      path: '/about',
      component: Auth(lazyLoading('About')),
    },
    {
      path: '/logs',
      component: Auth(lazyLoading('Logs')),
    },
    {
      path: '/goodBye',
      component: lazyLoading('GoodBye'),
    },
  ],
});
