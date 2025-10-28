<template>
  <v-container class="py-6">
    <v-row v-if="favorites.length">
      <v-col
        v-for="m in favorites"
        :key="m.imdbID"
        cols="12" sm="6" md="4" lg="3"
      >
        <MovieCard :movie="m" />
      </v-col>
    </v-row>
    <p v-else class="text-center text-grey">No favorites yet.</p>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import MovieCard from './MovieCard.vue'

const store = useMovieStore()
const favorites = computed(() => store.favorites)
</script>
