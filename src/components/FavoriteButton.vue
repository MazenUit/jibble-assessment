<template>
  <v-btn icon variant="text" @click.stop="toggle" class="fav-btn">
    <img
      :src="isFav ? star : starOutline"
      alt="favorite"
      class="icon"
    />
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import star from '@/assets/icons/star.svg'
import starOutline from '@/assets/icons/star-outline.svg'

interface Movie {
  Title: string
  Year: string
  imdbID: string
}

const props = defineProps<{ movie: Movie }>()
const store = useMovieStore()

const isFav = computed(() => store.isFavorite(props.movie.imdbID))
const toggle = () => store.toggleFavorite(props.movie)
</script>

<style scoped>
.fav-btn {
  padding: 0;
  min-width: 32px;
  transition: transform 0.2s ease;
}
.fav-btn:hover {
  transform: scale(1.1);
}
.icon {
  width: 24px;
  height: 24px;
  color: #fbc02d;
}
</style>
