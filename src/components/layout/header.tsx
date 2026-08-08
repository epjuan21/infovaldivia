"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarNav } from "./sidebar-nav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-16 items-center gap-3 border-b border-border bg-card px-4 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" aria-label="Abrir menú" />
          }
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetTitle className="flex h-16 items-center gap-2 border-b border-border px-4">
            <Image src="/logo.png" alt="ESE Hospital San Juan de Dios" width={32} height={32} />
            <span className="text-sm font-semibold">San Juan de Dios</span>
          </SheetTitle>
          {/* Cierra el menú al tocar un enlace */}
          <div onClick={() => setOpen(false)}>
            <SidebarNav />
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="ESE Hospital San Juan de Dios" width={32} height={32} />
        <span className="text-sm font-semibold">San Juan de Dios</span>
      </div>
    </header>
  );
}
