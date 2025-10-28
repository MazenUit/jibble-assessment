<template>
  <v-tooltip location="top" :text="movie.Title">
    <template #activator="{ props }">
      <v-card
        v-bind="props"
        elevation="2"
        class="movie-card rounded-xl text-center d-flex flex-column justify-center pa-4 mb-4"
      >
        <h3 class="text-h6 font-weight-medium mb-1 text-truncate">
          {{ movie.Title }}
        </h3>
        <p class="text-body-2 text-grey mb-2">Year: {{ movie.Year }}</p>
        <v-chip color="primary" variant="tonal" size="small" class="mx-auto">
          {{ movie.imdbID }}
        </v-chip>
      </v-card>
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
interface Props {
  movie: { Title: string; Year: string; imdbID: string }
}
defineProps<Props>()
</script>

<style scoped>
.movie-card {
  min-height: 150px;
  transition: all 0.25s ease;
}
.movie-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
}
.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
