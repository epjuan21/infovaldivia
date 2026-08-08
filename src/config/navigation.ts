import type { LucideIcon } from "lucide-react";
import { Home, BarChart3 } from "lucide-react";

export type NavItem = {
  title: string;
  href?: string; // Ruta si es un enlace directo
  icon?: LucideIcon; // Ícono opcional
  children?: NavItem[]; // Submenús (para menús expandibles)
};

export const navigation: NavItem[] = [
  {
    title: "Inicio",
    href: "/",
    icon: Home,
  },
  {
    title: "Gráficos",
    icon: BarChart3,
    children: [
      // Agrega aquí nuevos submenús/reportes en el futuro
      { title: "Indicadores Generales", href: "/graficos/indicadores-generales" },
    ],
  },
];
