"use server"

import { auth } from "@/utils/auth"
import { redirect } from "next/navigation"

export const signIn = async (
  email: string,
  password: string
): Promise<void | { error: string }> => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password
      }
    })
  } catch (error) {
    return { error: "Invalid email or password" }
  }

  redirect("/dashboard")
}
