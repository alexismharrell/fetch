import axios from 'axios'
import { Navigate } from 'react-router'

const AxiosInstance = axios.create({
  baseURL: 'https://frontend-take-home-service.fetch.com',
  timeout: 1000,
  withCredentials: true,
})

////
//// API Calls
////

export const login = async (name: string, email: string) => {
  await AxiosInstance.post('/auth/login', { name: name, email: email }).catch(
    (resp) => {
      console.info('login fail', resp)
    }
  )
}

export const logout = async () => {
  await AxiosInstance.post('/auth/logout')
    .then(() => {
      Navigate({ to: '/' })
    })
    .catch((resp) => {
      console.info('logout fail', resp)
    })
}

export const search = async () => {}

////
//// MODELS
////

interface SearchResults {
  resultIds: number[]
  total: number
  next: string
  prev: string
}

interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
}

interface Location {
  zip_code: string
  latitude: number
  longitude: number
  city: string
  state: string
  county: string
}

interface Coordinates {
  lat: number
  lon: number
}
