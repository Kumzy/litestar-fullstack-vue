import axios, { type AxiosRequestConfig, type AxiosResponse, type AxiosError } from 'axios'
import { useAuthStore } from '@/stores/auth.ts' // Import the auth store
import router from '@/router' // Import Vue router

// Use the environment variable for the baseURL
const baseURL = import.meta.env.API_BASE_URL as string
const timeout = import.meta.env.API_TIMEOUT as number

interface CustomApiError {
  status_code: number
  detail: string
}

function isCustomApiError(error: any): error is CustomApiError {
  return error && typeof error.status_code === 'number' && typeof error.detail === 'string'
}

const service = axios.create({
  baseURL: 'http://127.0.0.1:8089',
  timeout: timeout // Set the request timeout as needed
  //withCredentials: true
})

// Request Interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const authStore = useAuthStore()
    const token = authStore.token?.access_token // Replace with how you store your token
    config.headers['Access-Control-Allow-Origin'] = '*'
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    //console.log(config.headers)
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response Interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data
      if (isCustomApiError(errorData)) {
        switch (errorData.status_code) {
          case 401: // Handle invalid token
            // You can dispatch a logout action or redirect to a login page
            router.push({ name: 'login' })
            break
          case 403: // Handle insufficient permissions
            // Handle insufficient permissions, maybe show an error message or a specific page
            break
          // Handle other response status codes as needed
        }
        console.log('Custom API Error:', errorData.detail, 'Status Code:', errorData.status_code)
        // Handle custom API error
      } else {
        console.log('Standard Error:', error)
        // Handle standard error
      }
    } else {
      console.log('Non-Axios error occurred:', error)
    }
    return Promise.reject(error)

    // if (error.response) {
    //   switch (error.response.status) {
    //     case 401: // Handle invalid token
    //       // You can dispatch a logout action or redirect to a login page
    //       router.push({ name: 'login' })
    //       break
    //     case 403: // Handle insufficient permissions
    //       // Handle insufficient permissions, maybe show an error message or a specific page
    //       break
    //     // Handle other response status codes as needed
    //   }
    // }

    // return Promise.reject(error)
  }
)

export default service
