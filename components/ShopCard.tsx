// rfc スニペットを使う
// Shop型ファイルをインポート
import { Shop } from '@/types/shop'

type ShopCardProps = {
    shop: Shop
}

export default function ShopCard({ shop }: ShopCardProps) {
    return (
        <div>
            <p>{shop.name}</p>
            <p>{shop.leadMessage}</p>
        </div>
    )
}