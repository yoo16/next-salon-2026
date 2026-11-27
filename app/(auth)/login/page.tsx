// app/(auth)/login/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import SectionHeading from "@/components/SectionHeading"
import ui from "@/components/UI"

export default function LoginPage() {
    const [isPending, setIsPending] = useState(false)
    const [isError, setIsError] = useState(false)
    // ルーターのインスタンスを取得
    const router = useRouter()

    const handleClick = async () => {
        setIsPending(true)
        setIsError(false)

        try {
            router.push("/mypage")
        } catch {
            setIsError(true)
            setIsPending(false)
        }
    }

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