import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import getGoldPrice from "../data/getGoldPrice"

const GoldPrice = async () => {
  const data = await getGoldPrice()

  const pricePerOz = data.rates.USDXAU
  const pricePerGram = pricePerOz / 31.1035
  const price50g = pricePerGram * 50
  const price100g = pricePerGram * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gold Price</CardTitle>
        <CardDescription>The current price of gold</CardDescription>
        <CardContent className="p-0">
          <p>
            <strong>1oz</strong>: ${pricePerOz.toFixed(2)}
          </p>
          <p>
            <strong>50g</strong>: ${price50g.toFixed(2)}
          </p>
          <p>
            <strong>100g</strong>: ${price100g.toFixed(2)}
          </p>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default GoldPrice
