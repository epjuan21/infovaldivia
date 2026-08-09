"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeartPulse, Menu, ShieldCheck } from "lucide-react";
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
    <header className="sticky top-0 z-30 flex h-18 items-center justify-between border-b border-[#d9e7e2] bg-white/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Abrir menú" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SheetTitle className="flex h-20 items-center border-b border-border px-5">
                <Image
                  src="/logo.png"
                  alt="ESE Hospital San Juan de Dios"
                  width={4041}
                  height={1758}
                  className="h-9 w-auto"
                />
              </SheetTitle>
              <div onClick={() => setOpen(false)}>
                <SidebarNav />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="flex min-w-0 items-center gap-3 md:hidden">
          <Image
            src="/logo.png"
            alt="ESE Hospital San Juan de Dios"
            width={4041}
            height={1758}
            className="h-8 w-auto max-w-36 object-contain"
          />
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <span className="flex size-9 items-center justify-center rounded-md bg-[#e4f5ef] text-primary">
            <HeartPulse className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold text-[#18332e]">Portal institucional</p>
            <p className="text-xs text-muted-foreground">Información para nuestro equipo</p>
          </div>
        </div>
      </div>

      <div className="hidden items-center gap-2 text-xs font-bold text-[#477068] sm:flex">
        <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
        ESE Hospital San Juan de Dios
      </div>
    </header>
  );
}
