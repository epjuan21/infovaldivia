import { PageHeader } from "@/components/layout/page-header";
import { procedimientosHigieneOral } from "@/data/facturacion";

export const metadata = { title: "Higiene Oral" };

const conceptos = [
  ...new Set(
    procedimientosHigieneOral.map((procedimiento) => procedimiento.concepto),
  ),
];

export default function HigieneOralPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-bold text-primary">Facturación</p>
        <PageHeader
          titulo="Higiene Oral"
          descripcion="Códigos CUPS de los procedimientos realizados, clasificados por concepto y finalidad."
        />
      </div>

      <div className="space-y-6">
        {conceptos.map((concepto) => {
          const procedimientos = procedimientosHigieneOral.filter(
            (procedimiento) => procedimiento.concepto === concepto,
          );

          return (
            <section
              key={concepto}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/60 px-4 py-3">
                <h2 className="font-bold text-foreground">{concepto}</h2>
                <span className="text-sm text-muted-foreground">
                  {procedimientos.length} {procedimientos.length === 1 ? "procedimiento" : "procedimientos"}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[48rem] table-fixed border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Procedimientos de {concepto}
                  </caption>
                  <colgroup>
                    <col className="w-36" />
                    <col />
                    <col className="w-1/3" />
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
                        Finalidad
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {procedimientos.map((procedimiento) => (
                      <tr
                        key={procedimiento.codigoCups}
                        className="transition-colors hover:bg-muted/50"
                      >
                        <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-primary">
                          {procedimiento.codigoCups}
                        </td>
                        <td className="px-4 py-3 font-medium text-foreground">
                          {procedimiento.descripcion}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                          {procedimiento.finalidad}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}