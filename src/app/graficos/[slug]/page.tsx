import { notFound } from "next/navigation";
import { getReporte, reportes } from "@/data/reportes";
import { PowerBIEmbed } from "@/components/powerbi/powerbi-embed";

// Genera las rutas estáticas en tiempo de build (ideal para Vercel)
export function generateStaticParams() {
  return reportes.map((r) => ({ slug: r.slug }));
}

// Cualquier slug no listado devuelve 404 (sitio 100% estático)
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reporte = getReporte(slug);
  return { title: reporte ? reporte.titulo : "Gráfico" };
}

export default async function GraficoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reporte = getReporte(slug);
  if (!reporte) notFound();

  return (
    <section className="space-y-4">
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
    </section>
  );
}
