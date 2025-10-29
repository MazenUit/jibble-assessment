import axios from 'axios'
const API = 'https://jsonmock.hackerrank.com/api/movies'

export async function fetchInitialMovies() {
  const { data } = await axios.get(API)
  return data
}

export async function fetchMovies(title: string, page = 1) {
  const { data } = await axios.get(`${API}/search/?Title=${title}&page=${page}`)
  return data
}
