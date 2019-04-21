<template>
  <preview-layout>
    preview
    <div class="row q-pa-sm">
      <q-btn
        color="primary"
        icon="add"
        label="Fullscreen"
        flat
        @click="$q.fullscreen.request()"
      />
    </div>
    <div class="row q-pa-sm">
      <q-btn
        color="primary"
        icon="add"
        label="Regresar"
        flat
        @click="$router.push('/quotations')"
      />
    </div>
  </preview-layout>
</template>

<script>
export default {
  name: 'page-quotation-preview',
};
</script>

<style>
</style>
