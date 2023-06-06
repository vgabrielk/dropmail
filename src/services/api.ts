import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proxy.cors.sh/https://dropmail.me/api/graphql',
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'x-cors-api-key': import.meta.env.VITE_APP_CORS_TOKEN
  }
})

export default api