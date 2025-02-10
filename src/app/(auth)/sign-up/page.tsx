import SignUpForm from "@/app/components/auth/sign-up-form"
import { auth } from "@/utils/auth" // path to your Better Auth server instance
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const SignUpPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })
  console.log(session)
  if (session) {
    redirect("/dashboard")
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
