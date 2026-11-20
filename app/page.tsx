import SectionHeading from "@/components/SectionHeading";
import ShopCard from "@/components/ShopCard"
import { getShops } from "@/lib/services/shops";
// Firebase の認証情報を使用するためのインポート
import { auth } from "@/lib/firebase/client"

export default async function Home() {
  // Firebase の認証情報を使用してプロジェクトIDを取得してコンソール表示
  console.log(auth.app.options.projectId)

  const shops = await getShops()

  return (
    <div>
      <SectionHeading
        eyebrow="Featured Shops"
        title="今日の気分から選べるサロン"
        description="エリアやメニューから、あなたにぴったりのサロンを見つけましょう。"
      />
      <div className="mt-8 gap-3 grid md:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}
