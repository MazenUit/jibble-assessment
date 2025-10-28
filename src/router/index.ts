import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '@/views/MoviesView.vue'
import FavoritesView from '@/views/FavoritesView.vue'

const routes = [
  { path: '/', name: 'Home', component: MoviesView },
  { path: '/favorites', name: 'Favorites', component: FavoritesView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
