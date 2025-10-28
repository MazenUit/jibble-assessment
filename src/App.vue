<template>
  <v-app>
    <v-main class="pa-4">
      <v-btn color="primary" @click="click">Hello Vuetify</v-btn>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const click = () => alert('Vuetify is active!')
</script>
