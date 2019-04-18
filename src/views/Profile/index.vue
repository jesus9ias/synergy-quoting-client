<template>
  <main-layout>
    <general-section :title="$t('profile.title')">
      <q-card class="my-card">
        <q-card-section>
          profile
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section>
          change password
        </q-card-section>
      </q-card>
    </general-section>
  </main-layout>
</template>

<script>
export default {
  name: 'page-users',
  data() {
    return {};
  },
};
</script>
