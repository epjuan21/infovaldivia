# Guía de Creación del Proyecto — Web Institucional ESE Hospital San Juan de Dios (Valdivia, Antioquia)

Guía paso a paso para construir una página web institucional **estática**, de **uso interno**, sin autenticación y **sin base de datos**, desplegada en **Vercel**. El sitio mostrará información de interés general y por áreas, e incluirá reportes de **Power BI embebidos**.

---

## 1. Resumen del proyecto

| Aspecto | Definición |
|---|---|
| **Nombre del proyecto** | `hospital-valdivia-web` |
| **Framework** | Next.js 14+ (App Router) |
| **Lenguaje** | TypeScript |
| **Estilos / UI** | Tailwind CSS v4 + shadcn/ui |
| **Fuente** | Lato (Google Fonts) |
| **Color primario** | `#2ab48a` (verde institucional) |
| **Gráficos** | Reportes de Power BI embebidos vía iframe (URL pública "Publicar en la web") |
| **Datos** | Contenido 100% estático (sin base de datos, sin API) |
| **Autenticación** | No requerida (información de carácter público) |
| **Hosting** | Vercel |
| **Idioma** | Español |
| **Logo** | `Logo.png` (ubicado en la raíz del workspace) |

### Objetivos funcionales
- **Menú lateral (sidebar)** preparado para crecer: fácil de agregar nuevos menús y submenús.
- **Página de inicio** con información general de la institución (ampliable en el tiempo).
- **Menú "Gráficos"** con **submenús** que alojan reportes de Power BI. Se irán agregando más con el tiempo.

---

## 2. Requisitos previos

Instala/verifica en tu equipo:

- **Node.js 18.18+ o 20+** → [nodejs.org](https://nodejs.org)
- **pnpm** (gestor de paquetes del proyecto)
- **Git** → [git-scm.com](https://git-scm.com)
- **VS Code** (recomendado)
- Cuenta en **GitHub** y en **Vercel** (para el despliegue)

Instala pnpm (si no lo tienes). La forma recomendada con Node 18+ es via Corepack:

```powershell
corepack enable
corepack prepare pnpm@latest --activate
```

> Alternativa: `npm install -g pnpm`

Verifica versiones:

```powershell
node -v
pnpm -v
git --version
```

---

## 3. Crear el proyecto Next.js

> El proyecto vivirá en `E:\ProyectosReact\infovaldivia`, donde ya está el `Logo.png`.

Como la carpeta ya existe con el logo, crea el proyecto **en la carpeta actual** usando `.`:

```powershell
cd E:\ProyectosReact\infovaldivia
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Responde a las preguntas del asistente:

| Pregunta | Respuesta |
|---|---|
| Would you like to use TypeScript? | **Yes** |
| Would you like to use ESLint? | **Yes** |
| Would you like to use Tailwind CSS? | **Yes** |
| Would you like to use `src/` directory? | **Yes** |
| Would you like to use App Router? | **Yes** |
| Would you like to customize the default import alias (`@/*`)? | **No** (dejar `@/*`) |

> Si `create-next-app` se queja de que la carpeta no está vacía por el `Logo.png`, muévelo temporalmente, crea el proyecto y luego colócalo en `public/` (ver paso 6).

Prueba que arranca:

```powershell
pnpm dev
```

Abre http://localhost:3000

---

## 4. Instalar shadcn/ui

[shadcn/ui](https://ui.shadcn.com) genera componentes accesibles basados en Tailwind directamente en tu proyecto.

```powershell
pnpm dlx shadcn@latest init
```

Configuración sugerida durante el `init`:
- **Style**: Default (New York)
- **Base color**: Neutral (luego lo re-tematizamos con el verde institucional)
- **CSS variables**: Yes

> **Nota Tailwind v4:** con Next.js 15+, `create-next-app` instala **Tailwind CSS v4**. La configuración ya **no** usa `tailwind.config.ts`; el tema se define en CSS dentro de `src/app/globals.css` (bloque `@theme`) y el plugin se activa vía `postcss.config.mjs`. shadcn/ui detecta y soporta v4 automáticamente en el `init`.

Instala los componentes que usaremos para el sidebar y la navegación:

```powershell
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add sheet
pnpm dlx shadcn@latest add collapsible
pnpm dlx shadcn@latest add separator
pnpm dlx shadcn@latest add scroll-area
```

> `sheet` sirve para el menú lateral en móviles; `collapsible` para los submenús expandibles.

### 4.1. Color institucional (Tailwind v4)

El `init` de shadcn/ui genera en `src/app/globals.css` un bloque `:root` (y `.dark`) con variables CSS de color. Para aplicar el verde institucional **`#2ab48a`**, edita **solo** estas dos variables dentro de `:root` (deja el resto tal cual):

```css
:root {
  /* ...variables generadas por shadcn... */
  --primary: #2ab48a;              /* Verde institucional */
  --primary-foreground: #ffffff;   /* Texto sobre el color primario */
}
```

Con Tailwind v4, el bloque `@theme inline` de ese mismo archivo ya mapea `--primary` a la clase `bg-primary` / `text-primary`. No necesitas tocar nada más: al cambiar la variable, **todo el sitio** adopta el nuevo color.

> Si prefieres un modo oscuro coherente, define también `--primary` dentro del bloque `.dark` (puedes usar el mismo `#2ab48a`).

---

## 5. Estructura de carpetas propuesta

```
hospital-valdivia-web/
├─ public/
│  └─ logo.png                      # Logo institucional (renombrado en minúscula)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                 # Layout raíz: Sidebar + Header móvil + metadatos
│  │  ├─ page.tsx                   # Página de Inicio
│  │  ├─ icon.png                   # Favicon (copia del logo)
│  │  ├─ globals.css                # Estilos globales + tema (Tailwind v4)
│  │  └─ graficos/
│  │     ├─ page.tsx                # Índice del menú "Gráficos"
│  │     └─ [slug]/
│  │        └─ page.tsx             # Página dinámica por reporte de Power BI
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ sidebar.tsx             # Menú lateral (escritorio)
│  │  │  ├─ sidebar-nav.tsx         # Renderiza menús/submenús desde la config
│  │  │  ├─ page-header.tsx         # ⭐ Encabezado estándar de todas las páginas
│  │  │  └─ header.tsx              # Barra superior móvil con menú (Sheet)
│  │  └─ powerbi/
│  │     └─ powerbi-embed.tsx       # Componente reutilizable del iframe de Power BI
│  ├─ config/
│  │  └─ navigation.ts              # ⭐ Configuración central del menú (fuente única)
│  └─ data/
│     └─ reportes.ts                # ⭐ Catálogo de reportes de Power BI
├─ next.config.mjs
├─ postcss.config.mjs               # Tailwind v4 (no hay tailwind.config.ts)
├─ tsconfig.json
└─ package.json
```

> **Clave de mantenibilidad**: todo el menú se define en `src/config/navigation.ts` y los reportes en `src/data/reportes.ts`. Para agregar un nuevo menú/submenú o un nuevo gráfico **solo se editan esos archivos**, sin tocar componentes.

---

## 6. Colocar el logo

Copia y renombra el logo dentro de `public/` (Next.js sirve estáticos desde ahí):

```powershell
Copy-Item "E:\ProyectosReact\infovaldivia\Logo.png" "E:\ProyectosReact\infovaldivia\public\logo.png"
```

Se usará en el código como `/logo.png`.

### Favicon

En el App Router, Next.js usa automáticamente como favicon cualquier archivo `icon.png` (o `favicon.ico`) ubicado en `src/app/`. Copia el logo también ahí:

```powershell
Copy-Item "E:\ProyectosReact\infovaldivia\Logo.png" "E:\ProyectosReact\infovaldivia\src\app\icon.png"
```

> No hace falta configurar nada más: Next.js genera las etiquetas `<link rel="icon">` a partir de ese archivo.

---

## 7. Configuración central del menú

Este es el corazón de la escalabilidad. Cada entrada puede tener `children` (submenús).

`src/config/navigation.ts`:

```ts
import type { LucideIcon } from "lucide-react";
import { Home, BarChart3 } from "lucide-react";

export type NavItem = {
  title: string;
  href?: string;        // Ruta si es un enlace directo
  icon?: LucideIcon;    // Ícono opcional
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
      // ⭐ Agrega aquí nuevos submenús/reportes en el futuro
      { title: "Indicadores Generales", href: "/graficos/indicadores-generales" },
      // { title: "Urgencias", href: "/graficos/urgencias" },
      // { title: "Consulta Externa", href: "/graficos/consulta-externa" },
    ],
  },
  // ⭐ Para un nuevo menú de primer nivel en el futuro:
  // {
  //   title: "Documentos",
  //   icon: FileText,
  //   children: [ { title: "Circulares", href: "/documentos/circulares" } ],
  // },
];
```

> `lucide-react` ya viene con shadcn/ui. Elige íconos en [lucide.dev](https://lucide.dev/icons).

---

## 8. Catálogo de reportes de Power BI

Cada reporte se identifica por un `slug` (el mismo que va en la URL) y su URL pública de Power BI.

`src/data/reportes.ts`:

```ts
export type ReportePowerBI = {
  slug: string;       // Debe coincidir con el href del menú: /graficos/<slug>
  titulo: string;
  descripcion?: string;
  url: string;        // URL "Publicar en la web" de Power BI Service
  ancho?: number;     // px (por defecto 1024)
  alto?: number;      // px (por defecto 1060)
};

export const reportes: ReportePowerBI[] = [
  {
    slug: "indicadores-generales",
    titulo: "Indicadores Generales",
    descripcion: "Panorama general de indicadores institucionales.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMmMxZmViZDktZTVhOC00Zjg1LTgxYjEtYWE1YmFmNDMwNTA2IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 1060,
  },
  // ⭐ Agrega aquí nuevos reportes copiando este bloque
];

export function getReporte(slug: string) {
  return reportes.find((r) => r.slug === slug);
}
```

---

## 9. Componente de Power BI

`src/components/powerbi/powerbi-embed.tsx`:

```tsx
type PowerBIEmbedProps = {
  url: string;
  titulo: string;
  ancho?: number;
  alto?: number;
};

export function PowerBIEmbed({
  url,
  titulo,
  ancho = 1024,
  alto = 1060,
}: PowerBIEmbedProps) {
  // Mantiene la proporción 1024:1060 en cualquier ancho (el reporte refluye al tamaño del iframe)
  return (
    <div
      className="mx-auto w-full"
      style={{ maxWidth: ancho, aspectRatio: `${ancho} / ${alto}` }}
    >
      <iframe
        title={titulo}
        src={url}
        allowFullScreen
        className="h-full w-full rounded-lg border border-border shadow-sm"
      />
    </div>
  );
}
```

> El reporte se dise\u00f1\u00f3 para **1024 \u00d7 1060 px**. El contenedor conserva esa proporci\u00f3n (`aspect-ratio`) y se limita a `1024px` de ancho; en pantallas menores escala manteniendo la relaci\u00f3n y Power BI reajusta su contenido.

---

## 10. Página dinámica de gráficos

`src/app/graficos/[slug]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import { getReporte, reportes } from "@/data/reportes";
import { PowerBIEmbed } from "@/components/powerbi/powerbi-embed";

// Genera las rutas estáticas en tiempo de build (ideal para Vercel)
export function generateStaticParams() {
  return reportes.map((r) => ({ slug: r.slug }));
}

// Cualquier slug no listado devuelve 404 (sitio 100% estático)
export const dynamicParams = false;

// En Next.js 15+, `params` es asincrónico y debe usarse con await
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reporte = getReporte(slug);
  // El sufijo "— Hospital San Juan de Dios" lo agrega el template del layout
  return { title: reporte ? reporte.titulo : "Gráfico" };
}

export default async function GraficoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reporte = getReporte(slug);
  if (!reporte) notFound();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">{reporte.titulo}</h1>
        {reporte.descripcion && (
          <p className="text-muted-foreground">{reporte.descripcion}</p>
        )}
      </div>
      <PowerBIEmbed
        url={reporte.url}
        titulo={reporte.titulo}
        ancho={reporte.ancho}
        alto={reporte.alto}
      />
    </div>
  );
}
```

`src/app/graficos/page.tsx` (índice del menú Gráficos):

```tsx
import Link from "next/link";
import { reportes } from "@/data/reportes";
import { PageHeader } from "@/components/layout/page-header";

export const metadata = { title: "Gráficos" };

export default function GraficosIndex() {
  return (
    <section className="space-y-6">
      <PageHeader
        titulo="Gráficos"
        descripcion="Reportes e indicadores institucionales."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {reportes.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/graficos/${r.slug}`}
              className="block rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent"
            >
              <span className="font-medium">{r.titulo}</span>
              {r.descripcion && (
                <p className="text-sm text-muted-foreground">{r.descripcion}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

---

## 11. Sidebar y layout

`src/components/layout/sidebar-nav.tsx` (renderiza menús y submenús desde la config):

```tsx
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
    const isOpen = item.children.some((c) => c.href && pathname.startsWith(c.href));
    return (
      <Collapsible defaultOpen={isOpen}>
        <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
          {Icon && <Icon className="h-4 w-4" />}
          <span className="flex-1 text-left">{item.title}</span>
          <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="ml-6 space-y-1 border-l border-border pl-2">
          {item.children.map((child) => (
            <NavLink key={child.title} item={child} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  // Enlace simple
  const active = item.href && pathname === item.href;
  return (
    <Link
      href={item.href ?? "#"}
      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent ${
        active ? "bg-accent font-medium" : ""
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {item.title}
    </Link>
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
```

`src/components/layout/sidebar.tsx`:

```tsx
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
```

`src/components/layout/header.tsx` (barra superior con menú móvil):

```tsx
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
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Abrir menú">
            <Menu className="h-5 w-5" />
          </Button>
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
```

`src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Lato, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

// Fuente principal del sitio (Lato). Se expone como --font-sans para Tailwind
const lato = Lato({
  variable: "--font-sans",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  // ⭐ Reemplaza por la URL real del sitio en Vercel
  metadataBase: new URL("https://hospital-valdivia-web.vercel.app"),
  title: {
    default: "ESE Hospital San Juan de Dios — Valdivia",
    template: "%s — Hospital San Juan de Dios",
  },
  description:
    "Portal informativo interno del ESE Hospital San Juan de Dios de Valdivia, Antioquia.",
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "ESE Hospital San Juan de Dios — Valdivia",
    description:
      "Portal informativo interno del ESE Hospital San Juan de Dios de Valdivia, Antioquia.",
    locale: "es_CO",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "ESE Hospital San Juan de Dios — Valdivia",
    description:
      "Portal informativo interno del ESE Hospital San Juan de Dios de Valdivia, Antioquia.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${lato.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
```

> **Menú móvil:** el `Sidebar` se oculta en pantallas pequeñas (`hidden md:block`) y el `Header` (`md:hidden`) muestra un botón "hamburguesa" que abre el mismo `SidebarNav` dentro de un `Sheet`. Así hay una sola fuente de navegación para escritorio y móvil.

---

## 12. Página de inicio

`src/app/page.tsx`:

```tsx
import { PageHeader } from "@/components/layout/page-header";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <PageHeader
        titulo="ESE Hospital San Juan de Dios"
        descripcion="Municipio de Valdivia, Antioquia — Portal informativo interno."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Bienvenido</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Este espacio reúne información de interés general y por áreas para
          todo el personal de la institución. El contenido se irá ampliando
          con el tiempo.
        </p>
      </section>
    </section>
  );
}
```

---

## 13. Cómo agregar contenido en el futuro (mantenimiento)

### ➕ Agregar un nuevo reporte de Power BI (submenú de "Gráficos")
1. En `src/data/reportes.ts`, agrega un objeto al arreglo `reportes` con su `slug`, `titulo` y `url`.
2. En `src/config/navigation.ts`, agrega un `child` en el menú "Gráficos" con `href: "/graficos/<slug>"`.
3. Listo. La página se genera automáticamente.

### ➕ Agregar un nuevo menú de primer nivel
1. En `src/config/navigation.ts`, agrega un nuevo objeto a `navigation` (con `href` o con `children`).
2. Crea la ruta correspondiente en `src/app/...` si es una página nueva.

### ➕ Agregar información a la página de inicio
- Edita `src/app/page.tsx` y agrega secciones.

---

## 14. Guía de estilos (consistencia entre páginas)

> **Propósito:** esta sección es un **contrato de diseño** legible tanto por personas como por cualquier **modelo de IA**. Cuando se pida crear o modificar una página, la IA (o el desarrollador) **DEBE** seguir estas reglas al pie de la letra para garantizar consistencia visual y estructural en todo el sitio.

### 14.1. Contrato para IA (reglas obligatorias)

Al generar una página nueva, cumple **TODAS** estas condiciones:

1. **USA** siempre los tokens semánticos de shadcn/ui (`bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `bg-primary`, `border-border`, `bg-accent`). **NUNCA** uses colores fijos de Tailwind (`bg-blue-500`, `text-gray-700`, hex, rgb).
2. **USA** el componente `PageHeader` (definido en 14.5) como primer elemento de cada página.
3. **ENVUELVE** el contenido en `<section className="space-y-6">` como contenedor raíz.
4. **ESCRIBE** todo el texto visible en **español**.
5. **RESPETA** la escala de espaciado (14.4) y de tipografía (14.3). No inventes tamaños arbitrarios.
6. **REGISTRA** cada página nueva en `src/config/navigation.ts`. Una página sin entrada en el menú se considera incompleta.
7. **NO** añadas dependencias nuevas sin justificación. Reutiliza shadcn/ui y `lucide-react`.
8. **NO** uses estilos en línea (`style={{...}}`); usa clases de Tailwind.
9. **MANTÉN** el contenido estático: sin `fetch` a APIs externas ni acceso a bases de datos.
10. **GARANTIZA** accesibilidad: un solo `<h1>` por página, `alt` en imágenes, `title` en iframes, contraste suficiente.

### 14.2. Paleta y tokens de color

El color se gestiona con **variables CSS semánticas** de shadcn/ui (definidas en `globals.css`). La identidad institucional está fijada en la variable `--primary` con el verde **`#2ab48a`** (ver sección 4.1). Para re-tematizar el sitio completo basta con cambiar esa única variable.

| Token (clase) | Uso |
|---|---|
| `bg-background` / `text-foreground` | Fondo y texto base de la página |
| `bg-card` / `text-card-foreground` | Tarjetas, paneles, sidebar |
| `bg-primary` / `text-primary-foreground` | Acciones principales, énfasis institucional (verde `#2ab48a`) |
| `text-muted-foreground` | Texto secundario, descripciones |
| `bg-accent` | Estado hover, elemento activo del menú |
| `border-border` | Bordes y separadores |
| `bg-destructive` | Acciones destructivas / alertas (uso mínimo) |

> **Regla de oro:** si necesitas un color, pregúntate qué *rol* cumple y elige el token por su rol, no por su tono. Así el sitio se puede re-tematizar cambiando un único archivo.

### 14.3. Tipografía (jerarquía única)

Usa **exactamente** estas clases según el nivel. No mezcles otros tamaños.

| Elemento | Clases | Regla |
|---|---|---|
| Título de página (`<h1>`) | `text-3xl font-bold tracking-tight` | Uno por página |
| Subtítulo de página | `text-muted-foreground` | Opcional, bajo el `<h1>` |
| Encabezado de sección (`<h2>`) | `text-xl font-semibold` | |
| Subsección (`<h3>`) | `text-lg font-medium` | |
| Texto normal (`<p>`) | `text-sm leading-relaxed` o base | |
| Texto secundario | `text-sm text-muted-foreground` | |

### 14.4. Espaciado y layout

- **Contenedor raíz de página:** `<section className="space-y-6">`.
- **Separación entre bloques internos:** `space-y-4`.
- **Padding del área de contenido:** ya lo aporta `<main className="flex-1 p-6">` en el layout. **No** agregues padding externo redundante.
- **Rejillas (grids):** usa `grid gap-4` con breakpoints (`sm:grid-cols-2`, `lg:grid-cols-3`).
- **Ancho máximo de lectura:** para texto largo usa `max-w-3xl`.
- **Escala válida de spacing:** múltiplos de la escala de Tailwind (`2, 3, 4, 6, 8`). Evita valores como `p-5` o `gap-7`.

### 14.5. Componente base: `PageHeader`

Crea este componente reutilizable y úsalo en **todas** las páginas para un encabezado consistente.

`src/components/layout/page-header.tsx`:

```tsx
type PageHeaderProps = {
  titulo: string;
  descripcion?: string;
};

export function PageHeader({ titulo, descripcion }: PageHeaderProps) {
  return (
    <header className="space-y-1">
      <h1 className="text-3xl font-bold tracking-tight">{titulo}</h1>
      {descripcion && (
        <p className="text-muted-foreground">{descripcion}</p>
      )}
    </header>
  );
}
```

### 14.6. Plantilla canónica de página (copiar y adaptar)

Toda página nueva **DEBE** partir de esta plantilla:

```tsx
import { PageHeader } from "@/components/layout/page-header";

// El layout agrega el sufijo "— Hospital San Juan de Dios" mediante su title.template
export const metadata = {
  title: "Título de la página",
};

export default function NombreDeLaPagina() {
  return (
    <section className="space-y-6">
      <PageHeader
        titulo="Título de la página"
        descripcion="Breve descripción del propósito de esta página."
      />

      {/* Bloques de contenido, cada uno como <section className="space-y-4"> */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sección</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Contenido...
        </p>
      </section>
    </section>
  );
}
```

### 14.7. Patrón de tarjeta (cards)

Para listados o enlaces destacados, usa esta estructura consistente:

```tsx
<div className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent">
  <h3 className="font-medium">Título de la tarjeta</h3>
  <p className="text-sm text-muted-foreground">Descripción breve.</p>
</div>
```

### 14.8. Convenciones de nombres

| Elemento | Convención | Ejemplo |
|---|---|---|
| Carpetas y rutas (URL) | `kebab-case` | `/graficos/consulta-externa` |
| Archivos de componente | `kebab-case.tsx` | `page-header.tsx` |
| Nombre de componente (React) | `PascalCase` | `PageHeader` |
| Variables y funciones | `camelCase` | `getReporte` |
| `slug` de reportes | `kebab-case`, sin tildes ni espacios | `indicadores-generales` |
| Texto visible | Español, con tildes correctas | "Gráficos" |

### 14.9. Reglas de accesibilidad (obligatorias)

- Un único `<h1>` por página; no saltes niveles de encabezado (`h1 → h2 → h3`).
- Toda imagen (`<Image>`) lleva `alt` descriptivo.
- Todo `<iframe>` lleva `title`.
- Los enlaces describen su destino (evita "clic aquí").
- No transmitas información **solo** por color.

### 14.10. Checklist de "página lista"

Una página se considera terminada cuando:

- [ ] Usa `PageHeader` y el contenedor `<section className="space-y-6">`.
- [ ] Solo usa tokens semánticos de color (sin colores fijos).
- [ ] Respeta la escala tipográfica y de espaciado.
- [ ] Está registrada en `src/config/navigation.ts`.
- [ ] Cumple las reglas de accesibilidad (14.9).
- [ ] El texto está en español y sin errores.
- [ ] No introduce dependencias ni llamadas de red innecesarias.

---

## 15. Buenas prácticas y notas

- **URLs de Power BI**: usa siempre el enlace de tipo "Publicar en la web" (`https://app.powerbi.com/view?r=...`). Recuerda que este método hace el reporte **públicamente accesible** por cualquiera que tenga la URL; adecuado solo para información pública.
- **Responsividad**: el reporte pide 1024×1060 px; el contenedor con `overflow-x-auto` evita que se rompa en móviles.
- **Accesibilidad**: cada `iframe` lleva `title`; el logo lleva `alt`.
- **SEO / privacidad**: al ser interno, puedes agregar un `robots.txt` que impida indexación si lo deseas.
- **Formato de código**: mantén Prettier + ESLint (ESLint ya viene configurado).

---

## 16. Control de versiones (Git + GitHub)

```powershell
git init
git add .
git commit -m "Estructura inicial del portal institucional"
```

Crea un repositorio en GitHub y súbelo:

```powershell
git branch -M main
git remote add origin https://github.com/<tu-usuario>/hospital-valdivia-web.git
git push -u origin main
```

> El archivo `pnpm-lock.yaml` **debe** subirse al repositorio (no lo incluyas en `.gitignore`).

> Verifica que `.gitignore` (generado por Next.js) incluya `node_modules/` y `.next/`.

---

## 17. Despliegue en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **Add New → Project** e importa el repositorio `hospital-valdivia-web`.
3. Vercel detecta Next.js automáticamente. Al encontrar `pnpm-lock.yaml`, usa **pnpm** para instalar. No necesitas variables de entorno (sitio estático sin secretos).
4. Haz clic en **Deploy**.
5. Cada `git push` a `main` desplegará automáticamente los cambios.

Configuración de build (Vercel la detecta sola):
- **Build Command**: `next build`
- **Output**: automático
- **Install Command**: `pnpm install`

---

## 18. Comandos útiles

```powershell
pnpm dev      # Servidor de desarrollo (localhost:3000)
pnpm build    # Compilación de producción
pnpm start    # Servir la build localmente
pnpm lint     # Revisar calidad de código
```

---

## 19. Checklist de arranque

- [ ] Node.js y Git instalados
- [ ] Proyecto creado con `create-next-app`
- [ ] shadcn/ui inicializado y componentes agregados
- [ ] `logo.png` en `public/`
- [ ] `src/config/navigation.ts` creado
- [ ] `src/data/reportes.ts` creado con el primer reporte de Power BI
- [ ] Componentes de layout (`sidebar`, `sidebar-nav`) y `powerbi-embed` creados
- [ ] Páginas `/`, `/graficos` y `/graficos/[slug]` funcionando
- [ ] Repositorio en GitHub
- [ ] Desplegado en Vercel

---

**Próximo paso sugerido:** si quieres, puedo generar directamente todos estos archivos en el proyecto para dejarlo listo para ejecutar.
