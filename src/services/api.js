import axios from 'axios'
import { setCookie } from 'cookies-next'

const api = axios.create({
  baseURL: '/api'
})

export const login = async (values) => {
  const response = await api.post('/admins/login', values)
  setCookie('token', response.data.token, {
    maxAge: 60 * 60 * 24 * 7
  })
  return response.data
}
