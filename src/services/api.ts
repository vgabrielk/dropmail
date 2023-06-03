import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dropmail.me/api/graphql',
  headers: {
    'Access-Control-Allow-Origin' : '*'
  }
})

export default api