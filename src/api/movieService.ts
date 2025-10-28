import axios from 'axios'

const API = 'https://jsonmock.hackerrank.com/api/movies/search/'

export async function fetchMovies(title: string, page = 1) {
  const { data } = await axios.get(`${API}?Title=${title}&page=${page}`)
  return data
}
