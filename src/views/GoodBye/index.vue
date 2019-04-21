<template>
  <login-layout>
    Good Bye
    <div class="row q-pa-sm">
      <q-btn
        color="primary"
        icon="add"
        label="Ir a Login"
        @click="$router.push('/')"
      />
    </div>
  </login-layout>
</template>

<script>
export default {
  name: 'page-goodbye',
};
</script>
