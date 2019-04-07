<template>
  <q-stepper ref="stepper" v-model="currentStep">
    <q-step :name="1" title="Inicio" default>
      <form>
        <q-select
          v-model="selectedChamberType"
          float-label="Tipo de Cámara"
          :options="selectFormated(chamberTypes)"
        />

        <q-field
          label="Espesor de aislamiento"
          :error="false"
          error-label="Valor incorrecto"
        >
          <q-input suffix="mm" v-model="insulationThickness" type="number" />
        </q-field>

        <q-toggle v-model="floorInsulation" label="Aislamiento del suelo" />

        <q-field
          label="Largo (interior)"
          :error="false"
          error-label="Valor incorrecto"
        >
          <q-input suffix="m" v-model="internalLength" type="number" />
        </q-field>

        <q-field
          label="Fondo (interior)"
          :error="false"
          error-label="Valor incorrecto"
        >
          <q-input suffix="m" v-model="internalFund" type="number" />
        </q-field>

        <q-field
          label="ALto (interior)"
          :error="false"
          error-label="Valor incorrecto"
        >
          <q-input suffix="m" v-model="internalHeight" type="number" />
        </q-field>

        <q-field
          label="Volumen interior"
          :error="false"
          error-label="Valor incorrecto"
        >
          <q-input suffix="m3" v-model="internalVolume" type="number" />
        </q-field>

        <q-select
          v-model="selectedChamberApplication"
          float-label="Aplicación"
          :options="selectFormated(chamberApplications)"
        />

        <q-field
          label="Temperatura ambiente"
          :error="false"
          error-label="Valor incorrecto"
        >
          <q-input suffix="°C" v-model="chamberTemperature" type="number" />
        </q-field>

        <q-field
          label="Temperatura de camara"
          :error="false"
          error-label="Valor incorrecto"
        >
          <q-input suffix="°C" v-model="externalTemperature" type="number" />
        </q-field>
      </form>
    </q-step>

    <q-step :name="2" title="Producto" />
    <q-step :name="3" title="Cámara" />
    <q-step :name="4" title="Ventilación" />
    <q-step :name="5" title="Cargas" />
    <q-step :name="6" title="Resultados">
      <div class="q-display-1"><p class="text-weight-thin">Costo</p> $11,111.00</div>
    </q-step>
    <template v-slot:navigation>
      <q-stepper-navigation>
        <q-btn
          flat
          @click="$refs.stepper.previous()"
          label="Anterior"
        />
        <q-btn
          @click="$refs.stepper.next()"
          color="primary"
          label="Siguiente"
        />
        <q-btn
          @click="$refs.stepper.goTo(6)"
          color="positive"
          label="Finalizar"
        />
      </q-stepper-navigation>
    </template>
  </q-stepper>
</template>

<script>
import chamberTypes from '../../data/chamberTypes';
import chamberApplications from '../../data/chamberApplications';

export default {
  name: 'quotation-form',
  data() {
    return {
      currentStep: 1,
      chamberTypes,
      selectedChamberType: null,
      insulationThickness: 0,
      floorInsulation: false,
      internalLength: 0,
      internalFund: 0,
      internalHeight: 0,
      internalVolume: 0,
      chamberApplications,
      selectedChamberApplication: null,
      chamberTemperature: 0,
      externalTemperature: 0,
    };
  },
  methods: {
    selectFormated(list) {
      return list.map((item, i) => ({ label: item, value: i }));
    },
  },
};
</script>

<style>
</style>
