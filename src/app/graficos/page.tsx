import Link from "next/link";
import { reportes } from "@/data/reportes";
import { PageHeader } from "@/components/layout/page-header";

export const metadata = { title: "Gráficos" };

export default function GraficosIndex() {
  const categoriasOrden = ["Producción", "Coberturas", "Oportunidad"];
  const reportesPorCategoria = categoriasOrden.map((categoria) => ({
    categoria,
    items: reportes.filter((r) => r.categoria === categoria),
  }));

  return (
    <section className="space-y-6">
      <PageHeader
        titulo="Gráficos"
        descripcion="Reportes e indicadores institucionales."
      />
      {reportesPorCategoria.map((grupo) => (
        <div key={grupo.categoria}>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            {grupo.categoria}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {grupo.items.map((r) => (
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
        </div>
      ))}
    </section>
  );
}
