import getCostcoGoldInStock from "../data/getCostcoGoldInStock"

const CostcoGoldInStock = async () => {
  const data = await getCostcoGoldInStock()
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default CostcoGoldInStock
