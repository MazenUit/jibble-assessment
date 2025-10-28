import { describe, it, expect } from 'vitest'
import { useMovieStore } from '@/stores/movieStore'
import { setActivePinia, createPinia } from 'pinia'

describe('movie store', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('loads movies by title', async () => {
    const store = useMovieStore()
    await store.searchMovies('Batman')
    expect(store.movies.length).toBeGreaterThan(0)
  })
})
