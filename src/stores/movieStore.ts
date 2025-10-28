import { defineStore } from 'pinia'
import { fetchMovies } from '@/api/movieService'

interface Movie { Title: string; Year: string; imdbID: string }
interface MovieState {
  movies: Movie[]
  title: string
  page: number
  totalPages: number
}

export const useMovieStore = defineStore('movie', {
  state: (): MovieState => ({
    movies: [],
    title: 'Batman',
    page: 1,
    totalPages: 0
  }),

  actions: {
    async loadMovies(page = 1) {
      const res = await fetchMovies(this.title, page)
      this.page = page
      this.movies = res.data
      this.totalPages = res.total_pages
    },
    async searchMovies(title: string, page = 1) {
      this.title = title
      await this.loadMovies(page)
    }
  },

  persist: { storage: localStorage }
})
