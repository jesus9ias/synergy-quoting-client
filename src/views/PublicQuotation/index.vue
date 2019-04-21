<template>
  <public-layout>
    <general-section :title="$t('quotation.title')">
      <quotation-form />
    </general-section>
  </public-layout>
</template>

<script>
import QuotationForm from '../../components/QuotationForm/index.vue';

export default {
  name: 'page-public-quotation',
  components: {
    QuotationForm,
  },
};
</script>

<style>
</style>
