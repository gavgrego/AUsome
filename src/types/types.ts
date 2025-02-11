interface GoldPrice {
  success: boolean
  base: string
  timestamp: number
  rates: {
    USDXAG: number
    USDXAU: number
    XAG: number
    XAU: number
  }
}

interface CostcoGoldInStock {
  id: number
  url: string
  name: string
  price: number
  in_stock: boolean
  updated_at: string
}

export type { GoldPrice, CostcoGoldInStock }
