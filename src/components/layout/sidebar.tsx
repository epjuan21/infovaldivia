import Image from "next/image";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-68 shrink-0 border-r border-[#d9e7e2] bg-white md:flex md:flex-col">
      <div className="flex min-h-28 items-center border-b border-[#d9e7e2] px-5">
        <Image
          src="/logo.png"
          alt="ESE Hospital San Juan de Dios"
          width={4041}
          height={1758}
          priority
          className="h-auto w-full max-w-52"
        />
      </div>
      <div className="flex-1 overflow-y-auto py-3">
        <SidebarNav />
      </div>
      <div className="m-4 border-l-2 border-[#f6c85f] bg-[#f4f8f6] px-4 py-3">
        <p className="text-xs font-bold text-[#18332e]">Portal interno</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          Información al servicio de nuestro equipo.
        </p>
      </div>
    </aside>
  );
}
