<template>
  <main-layout>
    <general-section :title="$t('logs.title')">
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
          <q-td key="action" :props="props">{{ props.row.action }}</q-td>
          <q-td key="actions" :props="props">
          </q-td>
        </q-tr>
      </q-table>
    </general-section>
  </main-layout>
</template>

<script>
export default {
  name: 'page-logs',
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
          name: 'action',
          field: 'action',
          label: 'action',
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
          action: 'USER_CREATED',
        },
        {
          id: 2,
          username: 'user.2',
          action: 'QUOTAION_CREATED',
        },
        {
          id: 3,
          username: 'user.3',
          action: 'ROLES_UPDATED',
        },
      ],
    };
  },
};
</script>
