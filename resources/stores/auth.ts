// authStore.ts
import { defineStore } from 'pinia'
import type { Token } from '@/types/token'
import axios from 'axios' // assuming you are using axios for HTTP requests
import { API_URLS } from '@/constants/urls.ts'
import { login } from '@/api/auth.ts'
import router from '@/router'
import qs from 'qs'
import { API } from '@/types/api.ts'

interface AuthState {
  token: Token | null
}

export const useAuthStore = defineStore({
  id: 'auth',
  getters: {
    isAuthenticated: (state) => !!state.token?.access_token
  },
  state: (): AuthState => ({
    token: qs.parse(localStorage.getItem('token')) as Token | null
  }),
  actions: {
    async login(data: API.AccountLogin.RequestBody) {
      try {
        const response = await login(data)
        this.token = response.data

        localStorage.setItem('token', qs.stringify(response.data))

        router.push({ name: 'dashboard' })
        // Store user data in local storage or handle it as you need
      } catch (error) {
        console.error('Login error:', error)
        // Handle error
      }
    },
    async logout() {
      try {
        await axios.post(API_URLS.LOGOUT)
        this.token = null
        // Clear user data from local storage or handle it as you need
      } catch (error) {
        console.error('Logout error:', error)
        // Handle error
      }
    }
  }
})
