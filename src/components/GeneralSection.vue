<template>
  <q-page class="flex column q-pa-sm" :class="classes">
    <h3 class="section__title self-center">{{ this.title }}</h3>
    <slot />
  </q-page>
</template>

<script>
export default {
  name: 'section-general',
  props: {
    title: String,
    classes: String,
  },
};
</script>
