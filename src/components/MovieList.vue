<template>
  <v-container>
    <v-row>
      <v-col
        v-for="m in movies"
        :key="m.imdbID"
        cols="12" sm="6" md="4"
      >
        <MovieCard :movie="m" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import MovieCard from './MovieCard.vue'
interface Props { movies: any[] }
defineProps<Props>()
</script>
