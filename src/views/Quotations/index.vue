<template>
  <main-layout>
    <general-section :title="$t('quotations.title')">
      <div class="row q-pa-sm">
        <q-btn
          color="primary"
          icon="add"
          label="Nueva Cotización"
          @click.native="$router.push('/quotations/create');"
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
          <q-td key="createdBy" :props="props">{{ props.row.createdBy }}</q-td>
          <q-td key="client" :props="props">{{ props.row.client }}</q-td>
          <q-td key="createdAt" :props="props">{{ props.row.createdAt }}</q-td>
          <q-td key="status" :props="props">{{ props.row.status }}</q-td>
          <q-td key="actions" :props="props">
            <div
              class="row items-center justify-between no-wrap"
            >
              <q-btn
                color="primary"
                icon="edit"
              />
              <q-btn
                color="secondary"
                icon="print"
                @click="$router.push(`/quotations/${props.row.id}/preview`)"
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
  name: 'page-quotations',
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
          name: 'createdBy',
          field: 'createdBy',
          label: 'Creador',
          align: 'left',
          required: true,
          sortable: true,
        },
        {
          name: 'client',
          field: 'client',
          label: 'Cliente',
          align: 'left',
          required: true,
          sortable: true,
        },
        {
          name: 'createdAt',
          field: 'createdAt',
          label: 'Fecha creado',
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
          createdBy: 'user.1',
          client: 'Client 1',
          createdAt: '10/06/2017 11:14',
          status: 'Creado',
        },
        {
          id: 2,
          createdBy: 'user.1',
          client: 'Cliente 2',
          createdAt: '09/07/2017 14:20',
          status: 'Enviado',
        },
        {
          id: 3,
          createdBy: 'user.2',
          client: 'Cliente 3',
          createdAt: '22/08/2017 17:52',
          status: 'Aprovado',
        },
      ],
    };
  },
};
</script>
