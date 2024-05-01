<template>
  <ion-header>Modulo</ion-header>
      <ion-card>
        <ion-input label="nombre: "></ion-input>
        <ion-input label="descripcion: "></ion-input>
        <ion-input label="estado: "></ion-input>
      </ion-card>
  </template>
  
  <script>
  export default {
    props: {
      modulo: {
        type: Object,
        required: true
      }
    }
  }
  </script>