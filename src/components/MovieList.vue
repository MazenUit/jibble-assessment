<template>
  <v-container class="py-6">
    <div class="movie-list-wrapper">
      <v-row>
        <v-col
          v-for="m in movies"
          :key="m.imdbID"
          cols="12" sm="6" md="4" lg="3"
        >
          <MovieCard :movie="m" />
        </v-col>
      </v-row>

      <div v-if="loading" class="spinner-wrapper">
        <v-progress-circular indeterminate color="primary" size="60" width="6" />
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import MovieCard from './MovieCard.vue'
interface Props { movies: any[]; loading?: boolean }
defineProps<Props>()
</script>

<style scoped>
.movie-list-wrapper {
  position: relative;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1.2rem;
  padding: 2rem;
  min-height: 200px;
}
.spinner-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 1.2rem;
}
</style>
