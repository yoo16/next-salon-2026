import { MOCK_SHOPS } from "@/data/MockData";
import { NextResponse } from "next/server";

type Params = { params: Promise<{ id: string }> }

// http://localhost:3000/api/shops/[id]
// GETリクエスト（非同期通信）
export async function GET({ params }: Params) {
    // TODO: DBからショップデータを取得
    const shops = MOCK_SHOPS

    // JSONでレスポンス
    return NextResponse.json({ shops })
}