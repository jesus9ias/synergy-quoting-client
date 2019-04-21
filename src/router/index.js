import Vue from 'vue';
import Router from 'vue-router';
import lazyLoading from './lazyLoading';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: lazyLoading('Home'),
    },
    {
      path: '/quotations',
      component: lazyLoading('Quotations'),
    },
    {
      path: '/quotations/create',
      component: lazyLoading('Quotations/Create'),
    },
    {
      path: '/cotiza',
      component: lazyLoading('PublicQuotation'),
    },
    {
      path: '/users',
      component: lazyLoading('Users'),
    },
    {
      path: '/profile',
      component: lazyLoading('Profile'),
    },
    {
      path: '/products',
      component: lazyLoading('Products'),
    },
    {
      path: '/products/create',
      component: lazyLoading('Products/Create'),
    },
    {
      path: '/products/:id',
      component: lazyLoading('Products/Edit'),
    },
    {
      path: '/about',
      component: lazyLoading('About'),
    },
    {
      path: '/login',
      component: lazyLoading('Login'),
    },
  ],
});
