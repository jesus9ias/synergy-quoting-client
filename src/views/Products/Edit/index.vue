<template>
  <main-layout>
    <general-section :title="$t('products.title_edit')">
      <product-form @productFormAction="update" :actionText="'Actualizar'">
        edit
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
  name: 'page-products-edit',
  methods: {
    update() {
      console.log('update');
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
