<template>
  <v-container>
    <v-text-field
      v-model="query"
      label="Search Movie"
      @keyup.enter="search"
      clearable
    />
    <v-btn color="primary" class="mb-4" @click="search">Search</v-btn>

    <MovieList :movies="store.movies" />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import MovieList from '../components/MovieList.vue'

const query = ref('')
const store = useMovieStore()

const search = async () => {
  if (!query.value) return
  await store.searchMovies(query.value)
}
</script>
