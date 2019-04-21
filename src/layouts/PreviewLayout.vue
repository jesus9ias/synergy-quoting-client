<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PreviewLayout',
  data() {
    return {};
  },
  methods: {
    go(to) {
      this.$router.push(to);
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
