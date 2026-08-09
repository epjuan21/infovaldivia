"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navigation, type NavItem } from "@/config/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function isActivePath(item: NavItem, pathname: string): boolean {
  if (item.href && (pathname === item.href || pathname.startsWith(`${item.href}/`))) {
    return true;
  }
  return item.children?.some((child) => isActivePath(child, pathname)) ?? false;
}

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const Icon = item.icon;

  // Menú con submenús
  if (item.children?.length) {
    return (
      <CollapsibleItem
        item={item}
        defaultOpen={isActivePath(item, pathname)}
        Icon={Icon}
      />
    );
  }

  // Enlace simple
  const active = item.href && pathname === item.href;
  return (
    <Link
      href={item.href ?? "#"}
      className={`flex min-h-10 items-center gap-3 rounded-md px-3 py-2 text-sm text-[#395e57] transition-colors hover:bg-[#eaf5f1] hover:text-[#18332e] ${
        active ? "bg-[#dff3ec] font-bold text-[#126c56]" : ""
      }`}
    >
      {Icon && <Icon className="size-4" />}
      {item.title}
    </Link>
  );
}

function CollapsibleItem({
  item,
  defaultOpen,
  Icon,
}: {
  item: NavItem;
  defaultOpen: boolean;
  Icon?: NavItem["icon"];
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex min-h-10 w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-bold text-[#395e57] transition-colors hover:bg-[#eaf5f1] hover:text-[#18332e]">
        {Icon && <Icon className="size-4" />}
        <span className="flex-1 text-left">{item.title}</span>
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-5 space-y-1 border-l border-[#c9ddd6] pl-2">
        {item.children?.map((child) => (
          <NavLink key={child.title} item={child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function SidebarNav() {
  return (
    <nav aria-label="Navegación principal" className="space-y-1 px-3">
      {navigation.map((item) => (
        <NavLink key={item.title} item={item} />
      ))}
    </nav>
  );
}
