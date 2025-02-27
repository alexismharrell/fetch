import axios from 'axios'
import { Navigate } from 'react-router'

const AxiosInstance = axios.create({
  baseURL: 'https://frontend-take-home-service.fetch.com',
  timeout: 1000,
  withCredentials: true,
})

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
