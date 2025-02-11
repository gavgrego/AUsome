import type { GoldPrice } from "@/types/types"

const getGoldPrice = async (): Promise<GoldPrice> => {
  const url = `${process.env.METAL_PRICE_API_URL}/?api_key=${process.env.METAL_PRICE_API_KEY}&base=USD&currencies=XAU,XAG`
  const response = await fetch(url, {
    method: "GET",
    next: {
      revalidate: 1800 // the gold api is currently only giving us new data every 30 minutes, so we need to cache for 30 minutes
    }
  })

  const data = await response.json()
  return data
}

export default getGoldPrice
