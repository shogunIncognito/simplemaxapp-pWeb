import axios from 'axios'
import { getCookies, setCookie } from 'cookies-next'

const api = axios.create({
  baseURL: '/api'
})

const getToken = () => ({
  headers: {
    'auth-token': getCookies('auth-token')['auth-token']
  }
})

export const login = async (values) => {
  const response = await api.post('/admins/login', values)
  setCookie('auth-token', response.data.token, {
    maxAge: 60 * 60 * 24 * 7
  })
  return response.data
}

export const getCars = async () => {
  const response = await api.get('/cars')
  return response.data
}

export const createCar = async (values) => {
  const response = await api.post('/cars', values, getToken())
  return response.data
}

export const updateCar = async (id, values) => {
  const response = await api.put(`/cars/${id}`, values, getToken())
  return response.data
}

export const deleteCar = async (id) => {
  const ids = typeof id === 'object' ? id.map(car => `ids=${car.id}`).join('&') : `ids=${id}`
  const response = await api.delete(`/cars?${ids}`, getToken())
  return response.data
}

export const getUsers = async () => {
  const response = await api.get('/admins', getToken())
  return response.data
}

export const createUser = async (values) => {
  const response = await api.post('/admins', values, getToken())
  return response.data
}

export const deleteUser = async (id) => {
  const response = await api.delete(`/admins/${id}`, getToken())
  return response.data
}

export const updateUser = async (id, values, type) => {
  const response = await api.put(`/admins/${id}?type=${type}`, values, getToken())
  return response.data
}

export const getBrands = async () => {
  const response = await api.get('/brands')
  return response.data
}

export const createBrand = async (brand) => {
  const response = await api.post('/brands', { name: brand }, getToken())
  return response.data
}

export const deleteBrand = async (id) => {
  const response = await api.delete(`/brands/${id}`, getToken())
  return response.data
}

export const updatePreviewImage = async (id, preview) => {
  const response = await api.patch(`/cars/${id}`, { preview }, getToken())
  return response.data
}

export const deleteCarImageFromApi = async (id, url) => {
  const response = await api.put(`/cars/${id}/images`, { url }, getToken())
  return response.data
}
