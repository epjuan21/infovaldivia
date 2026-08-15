export type ReportePowerBI = {
  slug: string; // Debe coincidir con el href del menú: /graficos/<slug>
  titulo: string;
  descripcion?: string;
  url: string; // URL "Publicar en la web" de Power BI Service
  ancho?: number; // px (por defecto 1024)
  alto?: number; // px (por defecto 1060)
  categoria: string; // Categoría del reporte (Producción, Coberturas, Oportunidad)
};

export const reportes: ReportePowerBI[] = [
  {
    slug: "procedimientos-pym",
    titulo: "Procedimientos PyM",
    descripcion: "Indicadores de producción de procedimientos PyM.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMmMxZmViZDktZTVhOC00Zjg1LTgxYjEtYWE1YmFmNDMwNTA2IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Producción",
  },
  {
    slug: "consultas",
    titulo: "Consultas",
    descripcion:
      "Consultas de valoración integral, especialistas, medicina general, urgencias y odontología.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiY2EyNDAwODctZDAzYS00NTg0LTllMWUtOGJjMDY3MGNjNDc3IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Producción",
  },
  {
    slug: "egresos",
    titulo: "Egresos",
    descripcion: "Indicadores de egresos hospitalarios de la institución.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiODNlNjQ5NTctZmUxNC00ZjY3LWI1ODQtYTZiNGMwZTUzNGQwIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Producción",
  },
  {
    slug: "laboratorio",
    titulo: "Laboratorio",
    descripcion: "Indicadores de producción del servicio de laboratorio.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYzI1YTBmOTctY2MyMC00OTJkLWI3NTgtMWMxMTYzMjE1YjZlIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Producción",
  },
  {
    slug: "medicamentos",
    titulo: "Medicamentos",
    descripcion: "Indicadores de fórmulas y medicamentos despachados.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNGY2NTFkYTQtY2U3YS00OTdiLThmM2ItYzM4YTVmMzIzYjM2IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Producción",
  },
  {
    slug: "rayos-x",
    titulo: "Rayos X",
    descripcion: "Indicadores de producción del servicio de rayos X.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNDMwMjFiNTktYzFjMi00YTk4LTkyOWMtNzQyNDgwYjQyNTFjIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Producción",
  },
  {
    slug: "urgencias",
    titulo: "Urgencias",
    descripcion: "Indicadores de producción del servicio de urgencias.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMDIzMjA5ZjQtYWY5MS00MzFhLTg2OGUtZTY5MjIxZTAyYWRmIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Producción",
  },
  {
    slug: "procedimientos-odontologia",
    titulo: "Procedimientos Odontología",
    descripcion: "Indicadores de procedimientos del servicio de odontología.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMTZmYjBmMzAtMmQzOC00MTlhLTgyNGItY2E1NjcxZjFjYTQ0IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Producción",
  },
  {
    slug: "coosalud",
    titulo: "Coosalud",
    descripcion: "Indicadores de cobertura de Coosalud.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNWYyMDc0ODUtMzUzOC00MWRkLWI3NzYtYTY0NDU5MWRlNWU4IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9&embedImagePlaceholder=true",
    ancho: 1024,
    alto: 620,
    categoria: "Coberturas",
  },
  {
    slug: "triage",
    titulo: "Triage",
    descripcion: "Indicadores de oportunidad de triage.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiY2QwZGVkODEtZjBjMC00MTJhLThiZmEtOTFkYzdhOTgzMzIzIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Oportunidad",
  },
  {
    slug: "consulta",
    titulo: "Consulta",
    descripcion: "Indicadores de oportunidad de consulta.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiM2NmZTM5MzQtODg2NS00ZjFjLWE3MDUtZTMxOThkYzU3NWQzIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9",
    ancho: 1024,
    alto: 620,
    categoria: "Oportunidad",
  },
];

export function getReporte(slug: string) {
  return reportes.find((r) => r.slug === slug);
}
