import Header from "@/components/global/header"

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default LoggedInLayout
