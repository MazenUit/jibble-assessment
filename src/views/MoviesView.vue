<template>
  <v-container class="py-8">
    <SearchBar @search="search" />
    <MovieList :movies="store.movies" :loading="loading" />

    <v-pagination
      v-if="store.totalPages > 1"
      v-model="page"
      :length="store.totalPages"
      color="primary"
      class="mt-6 d-flex justify-center"
      @update:model-value="changePage"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import SearchBar from '../components/SearchBar.vue'
import MovieList from '../components/MovieList.vue'

const store = useMovieStore()
const loading = ref(false)
const page = ref(1)

onMounted(async () => {
  loading.value = true
  await store.loadMovies()
  loading.value = false
})

const search = async (query: string) => {
  loading.value = true
  page.value = 1
  await store.searchMovies(query)
  loading.value = false
}

const changePage = async (newPage: number) => {
  loading.value = true
  await store.loadMovies(newPage)
  loading.value = false
}
</script>
