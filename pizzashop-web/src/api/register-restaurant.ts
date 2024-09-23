import { api } from '@/lib/axios.ts'

export interface RegisterRestaurant {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  email,
  restaurantName,
  managerName,
  phone,
}: RegisterRestaurant) {
  await api.post('/restaurants', { email, restaurantName, managerName, phone })
}
