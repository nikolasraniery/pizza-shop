import { api } from '@/lib/axios.ts'

export interface GetManagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantResponse> {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )
  return response.data
}
