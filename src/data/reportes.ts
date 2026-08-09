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
    slug: "procedimientos-pym",
    titulo: "Procedimientos PyM",
    descripcion: "Indicadores de producción de procedimientos PyM.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMmMxZmViZDktZTVhOC00Zjg1LTgxYjEtYWE1YmFmNDMwNTA2IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    // Altura real del reporte (ajústala si sobra/falta espacio vertical)
    alto: 620,
  },
  {
    slug: "consultas",
    titulo: "Consultas",
    descripcion:
      "Consultas de valoración integral, especialistas, medicina general, urgencias y odontología.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiY2EyNDAwODctZDAzYS00NTg0LTllMWUtOGJjMDY3MGNjNDc3IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
  },
];

export function getReporte(slug: string) {
  return reportes.find((r) => r.slug === slug);
}
