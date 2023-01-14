import request from '../utils/request'

const baseURL = 'https://pokeapi.co/api/v2'

export function fetchPokemons(page = 1, limit = 9) {
  const offset = (page - 1) * limit

  return request({
    baseURL,
    method: 'GET',
    url: 'pokemon',
    params: { offset, limit }
  })
}

export function fetchPokemon(id) {
  return request({
    baseURL,
    method: 'GET',
    url: `pokemon/${id}`,
  })
}