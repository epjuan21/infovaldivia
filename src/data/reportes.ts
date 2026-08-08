export type ReportePowerBI = {
  slug: string; // Debe coincidir con el href del menú: /graficos/<slug>
  titulo: string;
  descripcion?: string;
  url: string; // URL "Publicar en la web" de Power BI Service
  ancho?: number; // px (por defecto 1024)
  alto?: number; // px (por defecto 1060)
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
];

export function getReporte(slug: string) {
  return reportes.find((r) => r.slug === slug);
}
