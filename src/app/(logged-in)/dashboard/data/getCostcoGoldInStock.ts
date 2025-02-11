import { CostcoGoldInStock } from "@/types/types"

const getCostcoGoldInStock = async (): Promise<CostcoGoldInStock[]> => {
  try {
    const response = await fetch(process.env.COSTCO_API_URL!)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Costco gold in stock:", error)
    return []
  }
}

export default getCostcoGoldInStock
