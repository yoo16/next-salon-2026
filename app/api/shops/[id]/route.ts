import { MOCK_SHOPS } from "@/data/MockData";
import { NextResponse } from "next/server";

type Params = { params: Promise<{ id: string }> }

// http://localhost:3000/api/shops/[id]
// GETリクエスト（非同期通信）
export async function GET(_request: Request, { params }: Params) {
    const { id } = await params
    // 指定されたIDのショップを取得
    const shop = MOCK_SHOPS.find((s) => s.id === id)

    return NextResponse.json({ shop })
}