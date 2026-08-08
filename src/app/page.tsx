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
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Este espacio reúne información de interés general y por áreas para
          todo el personal de la institución. El contenido se irá ampliando
          con el tiempo.
        </p>
      </section>
    </section>
  );
}
