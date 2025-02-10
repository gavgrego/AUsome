"use server"

import { auth } from "@/utils/auth" // path to your Better Auth server instance

export const signIn = async (email: string, password: string) => {
  const response = await auth.api.signInEmail({
    body: {
      email,
      password
    },
    asResponse: true // returns a response object instead of data
  })
  console.log(response)

  return response
}
