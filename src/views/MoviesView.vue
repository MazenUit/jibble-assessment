<template>
  <v-container class="py-8">
    <SearchBar @search="search" />
    <MovieList :movies="displayedMovies" :loading="loading" />

    <v-pagination
      v-if="totalPages > 1"
      v-model="page"
      :length="totalPages"
      color="primary"
      class="mt-6 d-flex justify-center"
      @update:model-value="changePage"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import SearchBar from '../components/SearchBar.vue'
import MovieList from '../components/MovieList.vue'

const store = useMovieStore()
const loading = ref(false)
const page = ref(1)
const perPage = 10

onMounted(async () => {
  loading.value = true
  await store.init()
  loading.value = false
})

const displayedMovies = computed(() => {
  const start = (page.value - 1) * perPage
  return store.movies.slice(start, start + perPage)
})

const totalPages = computed(() => Math.ceil(store.movies.length / perPage))

const search = async (query: string) => {
  loading.value = true
  page.value = 1
  await store.searchMovies(query)
  loading.value = false
}

const changePage = (newPage: number) => page.value = newPage
</script>
