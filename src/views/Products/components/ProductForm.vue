<template>
  <form>
    <slot />
    <div class="row q-pa-sm">
      <q-btn
        color="primary"
        icon="add"
        :label="actionText"
        @click="action"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'product-form',
  props: {
    actionText: {
      type: String,
      default: 'Guardar',
    },
  },
  methods: {
    action() {
      this.$emit('productFormAction');
    },
  },
  data() {
    return {};
  },
};
</script>
