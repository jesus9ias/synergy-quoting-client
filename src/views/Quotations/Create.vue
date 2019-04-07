<template>
  <main-layout>
    <general-section :title="$t('quotation.title')">
      <quotation-form />
    </general-section>
  </main-layout>
</template>

<script>
import QuotationForm from '../../components/QuotationForm/index.vue';

export default {
  name: 'page-quotation',
  components: {
    QuotationForm,
  },
};
</script>

<style>
</style>
