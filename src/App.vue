<template>
  <v-app>
    <v-main class="bg-grey-lighten-5">
      <v-container>
        <h1 class="text-h4 font-weight-bold text-center my-6">
          Jibble  Movie Finder
        </h1>
        <MoviesView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import MoviesView from './views/MoviesView.vue'
</script>
