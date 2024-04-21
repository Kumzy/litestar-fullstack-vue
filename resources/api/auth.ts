import request from '@/api/request'
import { API_URLS } from '@/constants/urls.ts'
import { API } from "@/types/api"

export function login(data: API.AccountLogin.RequestBody) {
  return request<API.AccountLogin.Http201.ResponseBody>({
    url: API_URLS.LOGIN,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'post',
    data: data
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'delete'
  })
}
