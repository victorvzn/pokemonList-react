import request from '../utils/request'

const baseURL = 'https://pokeapi.co/api/v2'

export function fetchPokemonsByType(type = 'electric') {

  return request({
    baseURL,
    method: 'GET',
    url: `type/${type}`
  })
}

export function fetchPokemon(id) {
  return request({
    baseURL,
    method: 'GET',
    url: `pokemon/${id}`,
  })
}