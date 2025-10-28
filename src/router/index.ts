import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '@/views/MoviesView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import StorybookView from '@/views/StorybookView.vue'

const routes = [
  { path: '/', name: 'Home', component: MoviesView },
  { path: '/favorites', name: 'Favorites', component: FavoritesView },
  { path: '/storybook', name: 'Storybook', component: StorybookView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
