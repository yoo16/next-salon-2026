import { notFound } from "next/navigation"
import { getShop, getMenus, getStaffs } from '@/lib/services/shops';
import ShopHero from "@/components/ShopHero"
import ShopMenuList from "@/components/ShopMenuList";
import ShopStaffList from "@/components/ShopStaffList";

type Props = {
    params: Promise<{ id: string }>
}

export default async function ShopDetailPage({ params }: Props) {
    const { id } = await params
    const shop = await getShop(id)

    if (!shop) notFound()

    // const menus = await getMenus(id)
    // const staffs = await getStaffs(id)
    // 並列でメニューとスタッフ情報を取得するように変更
    const [menus, staffs] = await Promise.all([
        getMenus(id),
        getStaffs(id),
    ])

    return (
        <div>
            <ShopHero shop={shop} />
            <section>
                <ShopMenuList menus={menus} />
                <ShopStaffList staffs={staffs} />
            </section>
        </div>
    )
}