<template>
  <main-layout>
    <general-section :title="$t('products.title')">
      <div class="row q-pa-sm">
        <q-btn
          color="primary"
          icon="add"
          label="Nuevo Producto"
        />
      </div>
      <q-table
        :data="tableData"
        :columns="columns"
        row-key="id"
      >
        <q-tr slot="header" slot-scope="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
        <q-tr slot="body" slot-scope="props" :props="props" >
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="username" :props="props">{{ props.row.username }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="status" :props="props">{{ props.row.status }}</q-td>
          <q-td key="actions" :props="props">
            <div
              v-if="props.row.status === 'Activo'"
              class="row items-center justify-between no-wrap"
            >
              <q-btn
                color="primary"
                icon="edit"
              />
              <q-btn
                flat
                color="negative"
                icon="delete"
              />
            </div>
          </q-td>
        </q-tr>
      </q-table>
    </general-section>
  </main-layout>
</template>

<script>
export default {
  name: 'page-products',
  data() {
    return {
      columns: [
        {
          name: 'id',
          field: 'id',
          label: 'Id',
          align: 'left',
          required: true,
          sortable: true,
        },
        {
          name: 'username',
          field: 'username',
          label: 'Username',
          align: 'left',
          required: true,
          sortable: true,
        },
        {
          name: 'email',
          field: 'email',
          label: 'Email',
          align: 'left',
          required: true,
          sortable: true,
        },
        {
          name: 'status',
          field: 'status',
          label: 'Estatus',
          align: 'left',
          required: true,
          sortable: true,
        },
        {
          name: 'actions',
          field: 'actions',
          label: '',
          align: 'left',
          required: false,
          sortable: false,
        },
      ],
      tableData: [
        {
          id: 1,
          username: 'user.1',
          email: 'user.1@sinergiarefrigeracion.com.mx',
          status: 'Activo',
        },
        {
          id: 2,
          username: 'user.2',
          email: 'user.2@sinergiarefrigeracion.com.mx',
          status: 'Activo',
        },
        {
          id: 3,
          username: 'user.3',
          email: 'user.3@sinergiarefrigeracion.com.mx',
          status: 'Inactivo',
        },
      ],
    };
  },
};
</script>
