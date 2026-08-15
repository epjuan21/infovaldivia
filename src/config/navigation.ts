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
      {
        title: "Producción",
        children: [
          { title: "Procedimientos PyM", href: "/graficos/procedimientos-pym" },
          { title: "Consultas", href: "/graficos/consultas" },
          { title: "Egresos", href: "/graficos/egresos" },
          { title: "Laboratorio", href: "/graficos/laboratorio" },
          { title: "Medicamentos", href: "/graficos/medicamentos" },
          { title: "Rayos X", href: "/graficos/rayos-x" },
          { title: "Urgencias", href: "/graficos/urgencias" },
          {
            title: "Procedimientos Odontología",
            href: "/graficos/procedimientos-odontologia",
          },
        ],
      },
      {
        title: "Coberturas",
        children: [{ title: "Coosalud", href: "/graficos/coosalud" }],
      },
      {
        title: "Oportunidad",
        children: [
          { title: "Triage", href: "/graficos/triage" },
          { title: "Consulta", href: "/graficos/consulta" },
        ],
      },
    ],
  },
];
