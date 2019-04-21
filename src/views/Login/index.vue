<template>
  <login-layout>
    <div class="login container">
      <img id="profile-img"
        width="300px"
        class="profile-img-card"
        src="../../assets/logos/logo-blue.jpg"
      />
      <div class="card card-container">
        <form class="form-signin" @submit.prevent="goHome">
          <q-input
            v-model="form.userName"
            id="inputUser"
            placeholder="UserName"
            required
            autofocus
          />
          <q-input
            v-model="form.password"
            type="password"
            id="inputPassword"
            placeholder="Password"
            required
          />
          <q-btn
            color="primary"
            label="Continuar"
            @click="goHome"
          />
        </form>
      </div>
    </div>
  </login-layout>
</template>

<script>
import keyStorage from 'key-storage';
import { STORAGE_IS_LOGIN } from '../../utils/constants';

export default {
  name: 'page-login',
  data() {
    return {
      isRequesting: false,
      form: {
        password: '',
        userName: '',
      },
      loginAttemptsError: false,
    };
  },
  methods: {
    goHome() {
      keyStorage.set(STORAGE_IS_LOGIN, 1);
      window.location.reload();
    },
  },
};
</script>
