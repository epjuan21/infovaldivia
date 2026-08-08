import Image from "next/image";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-card md:block">
      <div className="flex h-16 items-center gap-2 border-b border-border px-4">
        <Image src="/logo.png" alt="ESE Hospital San Juan de Dios" width={40} height={40} />
        <span className="text-sm font-semibold leading-tight">
          ESE Hospital San Juan de Dios
        </span>
      </div>
      <SidebarNav />
    </aside>
  );
}
