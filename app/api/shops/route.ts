import { MOCK_SHOPS } from "@/data/MockData";
import { NextResponse } from "next/server";

// GETリクエスト（非同期通信）
export async function GET() {
    // TODO: DBからショップデータを取得
    const shops = MOCK_SHOPS

    // JSONでレスポンス
    return NextResponse.json({ shops })
}