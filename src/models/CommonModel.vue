<template>
    <div>
      <p>Código: {{ item.codigo }}</p>
      <p>Nombre: {{ item.nombre }}</p>
      <p>Descripción: {{ item.descripcion }}</p>
      <p>Estado: {{ item.estado }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
  </script>