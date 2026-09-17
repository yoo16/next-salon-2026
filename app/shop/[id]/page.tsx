import { notFound } from "next/navigation"
import { getShop } from '@/lib/services/shops';

type Props = {
    params: Promise<{ id: string }>
}

export default async function ShopDetailPage({ params }: Props) {
    const { id } = await params
    const shop = await getShop(id)

    if (!shop) notFound()

    return (
        <div>
            <h1 className="text-2xl font-bold">{shop?.name}</h1>
        </div>
    )
}