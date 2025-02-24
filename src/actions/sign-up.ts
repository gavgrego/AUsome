"use server"

import { auth } from "@/utils/auth" // path to your Better Auth server instance

export const signUp = async (name: string, email: string, password: string) => {
  const response = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password
    }
  })

  return response
}
