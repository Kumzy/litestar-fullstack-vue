import request from '@/api/request'
import { API_URLS } from '@/constants/urls.ts'
import type { APIListAndCount } from "@/types/api.ts"

export function profile(data: LoginData) {
  return request({
    url: API_URLS.ACCOUNT_PROFILE,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'get',
    data: data
  })
}

export function fetchUsers(filters: APIListAndCount) {
  return request({
    url: API_URLS.USER_LIST,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'get',
    params: filters
  })
}

export function getUser(id: String) {
  return request({
    url: `${API_URLS.USER_LIST}/${id}`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'get'
  })
}