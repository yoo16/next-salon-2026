import { getShop } from '@/lib/services/shops';

type Props = {
    params: Promise<{ id: string }>
}

export default async function ShopDetailPage({ params }: Props) {
    const { id } = await params
    const shop = await getShop(id)

    return (
        <div>
            <h1>Shop Details</h1>
            <p>{shop?.name}</p>
        </div>
    )
}