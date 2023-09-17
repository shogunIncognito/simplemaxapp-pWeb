import axios from 'axios'
import { setCookie } from 'cookies-next'

const api = axios.create({
  baseURL: '/'
})

export const login = async (values) => {
  const response = await api.post('/api/admins/login', values)
  setCookie('token', response.data.token, {
    maxAge: 60 * 60 * 24 * 7
  })
  return response.data
}
