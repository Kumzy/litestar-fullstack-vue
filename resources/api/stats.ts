import request from '@/api/request'
import { API_URLS } from '@/constants/urls.ts'

export function fetchStatsCustomersLicenses() {
  return request({
    url: API_URLS.STATS_CUSTOMERS_LICENSES,
    method: 'get'
  })
}

export function fetchStatsCustomers() {
  return request({
    url: API_URLS.STATS_CUSTOMERS,
    method: 'get'
  })
}
