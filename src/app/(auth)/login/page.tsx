import LoginForm from "@/app/components/auth/login-form"
import { auth } from "@/utils/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const LoginPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <LoginForm />
    </div>
  )
}

export default LoginPage
