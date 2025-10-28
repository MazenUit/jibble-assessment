<template>
  <v-app>
    <NavBar />
    <v-main class="bg-grey-lighten-5">
      <v-container class="py-6">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>
