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

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const Icon = item.icon;

  // Menú con submenús
  if (item.children?.length) {
    const containsActive = item.children.some(
      (c) => c.href && pathname.startsWith(c.href),
    );
    return <CollapsibleItem item={item} defaultOpen={containsActive} Icon={Icon} />;
  }

  // Enlace simple
  const active = item.href && pathname === item.href;
  return (
    <Link
      href={item.href ?? "#"}
      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
        active ? "bg-accent font-medium" : ""
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
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
      <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent">
        {Icon && <Icon className="h-4 w-4" />}
        <span className="flex-1 text-left">{item.title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-6 space-y-1 border-l border-border pl-2">
        {item.children?.map((child) => (
          <NavLink key={child.title} item={child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function SidebarNav() {
  return (
    <nav className="space-y-1 p-3">
      {navigation.map((item) => (
        <NavLink key={item.title} item={item} />
      ))}
    </nav>
  );
}
