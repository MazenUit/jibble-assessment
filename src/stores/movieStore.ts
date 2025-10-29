import { defineStore } from 'pinia'
import { fetchMovies, fetchInitialMovies } from '@/api/movieService'

interface Movie { Title: string; Year: string; imdbID: string }
interface MovieState {
  movies: Movie[]
  favorites: Movie[]
  title: string
  page: number
  totalPages: number
}

export const useMovieStore = defineStore('movie', {
  state: (): MovieState => ({
    movies: [],
    favorites: [],
    title: '',
    page: 1,
    totalPages: 0
  }),

  actions: {
    async init() {
      const res = await fetchInitialMovies()
      this.movies = res.data
      this.totalPages = res.total_pages
    },
    async loadMovies(page = 1) {
      const res = await fetchMovies(this.title, page)
      this.page = page
      this.movies = res.data
      this.totalPages = res.total_pages
    },
    async searchMovies(title: string, page = 1) {
      this.title = title
      await this.loadMovies(page)
    },
    toggleFavorite(movie: Movie) {
      const exists = this.favorites.find(m => m.imdbID === movie.imdbID)
      this.favorites = exists
        ? this.favorites.filter(m => m.imdbID !== movie.imdbID)
        : [...this.favorites, movie]
    },
    isFavorite(id: string) {
      return this.favorites.some(m => m.imdbID === id)
    }
  },

  persist: { storage: localStorage }
})
