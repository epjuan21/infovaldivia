import { ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { finalidadVacunacion, vacunas } from "@/data/vacunacion";

export const metadata = { title: "Vacunación" };

export default function VacunacionPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-bold text-primary">Facturación</p>
        <PageHeader
          titulo="Vacunación"
          descripcion="Códigos CUPS y CIE10 de los procedimientos de vacunación, con sus rangos de edad."
        />
      </div>

      <div className="flex items-center gap-3 border-l-4 border-primary bg-accent px-4 py-3 text-sm text-accent-foreground">
        <ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <span className="font-bold">Finalidad para todas las vacunas:</span>{" "}
          {finalidadVacunacion}
        </p>
      </div>

      <section className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/60 px-4 py-3">
          <h2 className="font-bold text-foreground">Vacunas</h2>
          <span className="text-sm text-muted-foreground">
            {vacunas.length} procedimientos
          </span>
        </div>
        <div className="overflow-x-auto">
          <table
            className="w-full table-fixed border-collapse text-left text-sm"
            style={{ minWidth: "88rem" }}
          >
            <caption className="sr-only">
              Procedimientos de vacunación
            </caption>
            <colgroup>
              <col className="w-36" />
              <col className="w-96" />
              <col className="w-24" />
              <col />
              <col className="w-28" />
              <col className="w-28" />
            </colgroup>
            <thead className="bg-[#e1f3ec] text-[#18332e]">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">
                  Código CUPS
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  Descripción
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  CIE10
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  Descripción CIE10
                </th>
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  Edad mínima
                </th>
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  Edad máxima
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {vacunas.map((vacuna) => (
                <tr
                  key={vacuna.codigoCups}
                  className="transition-colors hover:bg-muted/50"
                >
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-primary">
                    {vacuna.codigoCups}
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">
                    {vacuna.descripcion}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-foreground">
                    {vacuna.cie10}
                  </td>
                  <td className="px-4 py-3 text-foreground">
                    {vacuna.descripcionCie10}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">
                    {vacuna.edadMinima}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">
                    {vacuna.edadMaxima}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}