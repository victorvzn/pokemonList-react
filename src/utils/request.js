import axios from 'axios'

const headers = { 'Content-Type': 'application/json' }

const instance = axios.create({ headers })

export default instance