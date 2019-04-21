<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar color="primary" class="shadow-1">
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title @click.native="go('/')">
          {{ $t('toolbar.title') }}
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          aria-label="New Cotization"
          v-if="$q.screen.gt.sm"
          @click.native="go('/quotations/create')"
        >
          <q-icon name="add" />
        </q-btn>
        <q-btn
          flat
          dense
          round
          aria-label="Users"
          v-if="$q.screen.gt.sm"
          @click.native="go('/profile')"
        >
          <q-icon name="person" />
        </q-btn>

        <q-btn
          flat
          dense
          round
          icon="more_vert"
          v-if="$q.screen.lt.md"
        >
          <q-menu>
            <q-list>
              <q-item class="qitemMenu" @click.native="go('/quotations/create')">
                <q-item-section>
                  <q-item-label label>Nueva Cotización</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="qitemMenu" @click.native="go('/profile')">
                <q-item-section>
                  <q-item-label label>Perfil</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="qitemMenu" @click.native="closeSession">
                <q-item-section>
                  <q-item-label label>Cerrar Sesión</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :content-class="'layoutMenu'"
    >
      <img class="sidenav__logo" alt="Sinergia logo" src="../assets/logos/logo-white.png">
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('sidemenu.home') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/quotations/create" exact>
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('sidemenu.new_quotation') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/quotations" exact>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('sidemenu.quotations') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/users" exact>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('sidemenu.users') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/products" exact>
          <q-item-section avatar>
            <q-icon name="apps" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('sidemenu.products') }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script>
import keyStorage from 'key-storage';
import { STORAGE_IS_LOGIN } from '../utils/constants';

export default {
  name: 'layout-main',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    go(to) {
      this.$router.push(to);
    },
    closeSession() {
      keyStorage.remove(STORAGE_IS_LOGIN);
      //  window.location.href = '/#/goodBye';
      window.location.href = '/';
    },
  },
};
</script>

<style lang="stylus">
  .layoutMenu
    background-color #222
    color white
    .q-item
      padding 0px 16px
</style>
