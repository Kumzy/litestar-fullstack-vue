import request from '@/api/request'
import { API_URLS } from '@/constants/urls.ts'
import type { APIListAndCount } from '@/types/api'
// import type { CustomerCreate, CustomerUpdate } from '@/types/customer'

// params: APIListAndCount
export function fetchLicenses(id: string, filters: APIListAndCount) {
  return request({
    url: `${API_URLS.CUSTOMER_GET}/${id}/licenses`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'get',
    params: filters
  })
}
