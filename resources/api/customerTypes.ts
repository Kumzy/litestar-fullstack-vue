import request from '@/api/request'
import { API_URLS } from '@/constants/urls.ts'

export function fetchCustomerTypes() {
  return request({
    url: API_URLS.CUSTOMER_TYPE_LIST,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'get'
  })
}
