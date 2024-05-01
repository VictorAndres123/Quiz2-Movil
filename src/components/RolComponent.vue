<template>
  <ion-header>Rol</ion-header>
      <ion-card>
        <ion-input color="danger" label="codigo: "></ion-input>
        <ion-input label="nombre: "></ion-input>
        <ion-input label="descripcion: "></ion-input>
        <ion-input label="estado: "></ion-input>
      </ion-card>
  </template>
  
  <script>
  export default {
    props: {
      rol: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  