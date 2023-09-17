import axios from 'axios'

const api = axios.create({
  baseURL: '/'
})

export const login = async (values) => {
  const response = await api.post('/api/admins/login', values)
  return response.data
}
