<template>
  <v-card class="mb-3">
    <v-card-title>{{ movie.Title }}</v-card-title>
    <v-card-subtitle>{{ movie.Year }}</v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
interface Props { movie: { Title: string; Year: string } }
defineProps<Props>()
</script>
