<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Modulo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="card">
        <ion-card-header>
          <ion-card-title>Vista Modulo</ion-card-title>
        </ion-card-header>
        <ion-card-content>
        </ion-card-content>
        <ModuloComponent/>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import ModuloComponent from '@/components/ModuloComponent.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
</script>

<style scoped>
.card ion-card-header {
  background-color: #007bff; /* Cambie el color de fondo del encabezado de la tarjeta */
}

.card ion-card-title {
  color: #ffffff; /* Cambie el color del texto del título */
}

.card ion-card-content {
  font-size: 14px;
}
</style>



