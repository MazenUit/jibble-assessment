<template>
  <v-container class="py-8">
    <SearchBar @search="search" />

    <MovieList :movies="store.movies" :loading="loading" />

    <v-row justify="center" v-if="!store.movies.length && !loading">
      <v-col cols="12" class="text-center text-grey">
        <p>No movies found</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import SearchBar from '../components/SearchBar.vue'
import MovieList from '../components/MovieList.vue'

const store = useMovieStore()
const loading = ref(false)

const search = async (query: string) => {
  loading.value = true
  await store.searchMovies(query)
  loading.value = false
}
</script>
