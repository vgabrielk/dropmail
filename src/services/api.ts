import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proxy.cors.sh/https://dropmail.me/api/graphql',
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'x-cors-api-key': 'temp_893c3398c66db39d1aa08f2ba10f1c98'
  }
})

export default api