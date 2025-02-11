import GoldPrice from "./components/gold-price"
import CostcoGoldInStock from "./components/costco-gold-in-stock"
import { Suspense } from "react"
const DashboardPage = async () => {
  const inStockItems = [
    {
      name: "100% Platinum",
      price: 1000,
      inStock: true
    },
    {
      name: "100% Gold",
      price: 1000,
      inStock: true
    },
    {
      name: "100% Silver",
      price: 1000,
      inStock: true
    },
    {
      name: "100% Palladium",
      price: 1000,
      inStock: true
    }
  ]
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row gap-4">
        <div className="basis-1/4">
          <GoldPrice />
        </div>
        <div className="basis-3/4">
          <div className="flex flex-row gap-4">
            <div className="basis-1/2">
              <p>Gold Price</p>
            </div>
            <div className="basis-1/2">
              <div>
                <h2>Currently in-stock PM @ Costco:</h2>
                <div className="flex flex-col gap-2">
                  <Suspense fallback={<div>Loading...</div>}>
                    <CostcoGoldInStock />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
