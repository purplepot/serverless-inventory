export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  'https://wlcg1ndgf6.execute-api.ap-south-1.amazonaws.com/dev';

export const API_ENDPOINTS = {
  // Health
  health: `${API_BASE_URL}/health`,

  // Products
  products: `${API_BASE_URL}/products`,
  product: (id: string) => `${API_BASE_URL}/products/${id}`,

  // Orders
  orders: `${API_BASE_URL}/orders`,
  order: (id: string) => `${API_BASE_URL}/orders/${id}`,
} as const;