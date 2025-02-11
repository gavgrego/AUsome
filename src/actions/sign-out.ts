"use server"

import { auth } from "@/utils/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function signOut(): Promise<void> {
  await auth.api.signOut({
    headers: await headers()
  })

  redirect("/login")
}
