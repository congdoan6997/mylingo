import UserProgress from "@/components/user/UserProgress"
import { Suspense } from "react"

export default function UserProgressPlain() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProgress />
    </Suspense>
  )
}
