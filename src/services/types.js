import request from '../utils/request'

const baseURL = 'https://pokeapi.co/api/v2'

export function fetchTypes() {
  return request({
    baseURL,
    method: 'GET',
    url: `type`,
  })
}