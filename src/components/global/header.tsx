"use client"

import { signOut } from "@/actions/sign-out"
import { Button } from "../ui/button"
import { useTransition } from "react"
import { LoadingSpinner } from "./loading-spinner"
const Header = () => {
  const [isPending, startTransition] = useTransition()

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <h1>AUsome</h1>
      </div>
      <div className="flex flex-row">
        <Button
          onClick={() => startTransition(async () => await signOut())}
          disabled={isPending}
        >
          {isPending ? <LoadingSpinner /> : "Sign Out"}
        </Button>
      </div>
    </div>
  )
}

export default Header
