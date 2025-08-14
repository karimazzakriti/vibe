export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  image_url?: string
  is_vegan: boolean
  is_gluten_free: boolean
  is_halal: boolean
  created_at: string
  updated_at: string
}

export interface MenuCategory {
  name: string
  items: MenuItem[]
  description?: string
}

export interface MenuResponse {
  success: boolean
  data: MenuItem[]
  error?: string
}