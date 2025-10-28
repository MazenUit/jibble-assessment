import { defineStore } from 'pinia'
import { fetchMovies } from '@/api/movieService'

interface Movie { Title: string; Year: string; imdbID: string }
interface MovieState {
  movies: Movie[]
  total: number
  title: string
  page: number
  totalPages: number
}

export const useMovieStore = defineStore('movie', {
  state: (): MovieState => ({
    movies: [],
    total: 0,
    title: '',
    page: 1,
    totalPages: 0
  }),

  actions: {
    async searchMovies(title: string, page = 1) {
      const res = await fetchMovies(title, page)
      this.title = title
      this.page = page
      this.movies = res.data
      this.total = res.total
      this.totalPages = res.total_pages
    }
  },

  persist: { storage: localStorage }
})
