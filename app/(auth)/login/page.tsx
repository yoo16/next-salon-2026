// app/(auth)/login/page.tsx
"use client"

import { useState } from "react"
import SectionHeading from "@/components/SectionHeading"
import ui from "@/components/UI"

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md">
      <SectionHeading
        eyebrow="Login"
        title="ログイン"
        description="Google アカウントでログインします。初めての方は、ログインと同時に登録されます。"
      />
    </div>
  )
}