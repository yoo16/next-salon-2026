import type { Menu } from "@/types/menu"
import ui from "@/components/UI"

type MenuStepProps = {
  menus: Menu[]
  selectedMenuId: string | null
  onSelect: (menuId: string) => void
}

export default function MenuStep({ menus, selectedMenuId, onSelect }: MenuStepProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className={ui.title}>STEP 1: メニューを選ぶ</h3>
      {/* ここにメニューのカードが入る */}
    </div>
  )
}