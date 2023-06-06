import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proxy.cors.sh/https://dropmail.me/api/graphql',
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'x-cors-api-key': 'temp_81cb01552eab38f0a7e7573710bf5120'
  }
})

export default api