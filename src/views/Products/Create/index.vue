<template>
  <main-layout>
    <general-section :title="$t('products.title_create')">
      <product-form @productFormAction="save">
        create
      </product-form>
      <div class="row q-pa-sm">
        <q-btn
          color="primary"
          icon="add"
          label="Ir al listado"
          @click="$router.push('/products')"
        />
      </div>
    </general-section>
  </main-layout>
</template>

<script>
import ProductForm from '../components/ProductForm.vue';

export default {
  name: 'page-products-create',
  methods: {
    save() {
      console.log('save');
    },
  },
  data() {
    return {};
  },
  components: {
    ProductForm,
  },
};
</script>
