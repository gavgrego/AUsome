import { auth } from "@/utils/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })
  if (session) {
    redirect("/dashboard")
  } else {
    redirect("/login")
  }
}

export default Home
