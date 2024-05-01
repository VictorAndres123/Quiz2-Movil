<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Rol</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card class="card">
        <ion-card-header>
          <ion-card-title>Vista rol</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <RolComponent/>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import RolComponent from '@/components/RolComponent.vue';
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



