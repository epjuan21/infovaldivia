import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  HeartPulse,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 pb-8">
      <section className="home-hero relative isolate min-h-[34rem] overflow-hidden rounded-lg bg-[#12352f] text-white">
        <div className="relative z-10 grid min-h-[34rem] items-end gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center lg:px-14">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase text-[#a9e6d3]">
              <span className="h-px w-8 bg-[#f6c85f]" />
              Portal informativo institucional
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
              Información que nos conecta y nos ayuda a cuidar mejor.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Un espacio para consultar indicadores, información de interés y
              recursos de la ESE Hospital San Juan de Dios de Valdivia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.esehospitalsanjuandedios-valdivia-antioquia.gov.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[#f6c85f] px-5 text-sm font-bold text-[#18332e] transition-colors hover:bg-[#ffda78] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ver Página Oficial
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <Link
                href="/graficos"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/25 px-5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explorar gráficos
              </Link>
            </div>
          </div>

          <div className="hidden border-l border-white/15 pl-8 lg:block">
            <div className="rounded-lg bg-white p-7 shadow-2xl shadow-black/20">
              <Image
                src="/logo.png"
                alt="ESE Hospital San Juan de Dios"
                width={4041}
                height={1758}
                priority
                className="h-auto w-full"
              />
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/65">
              <HeartPulse className="size-4 text-[#f6c85f]" aria-hidden="true" />
              Valdivia, Antioquia
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="destacados" className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-md">
          <p className="flex items-center gap-2 text-xs font-bold uppercase text-primary">
            <Sparkles className="size-4" aria-hidden="true" />
            Para nuestro equipo
          </p>
          <h2 id="destacados" className="mt-3 text-3xl font-black leading-tight text-[#18332e]">
            Lo importante, más fácil de encontrar.
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Este portal crecerá con información útil para las diferentes áreas
            y procesos de la institución.
          </p>
        </div>

        <Link
          href="/graficos/procedimientos-pym"
          className="group grid min-h-64 overflow-hidden rounded-lg border border-[#b7d8cd] bg-[#eff9f5] p-6 transition-colors hover:border-primary sm:grid-cols-[1fr_auto] sm:p-8"
        >
          <div className="flex max-w-xl flex-col justify-between gap-10">
            <div>
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary text-white">
                <BarChart3 className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase text-primary">
                Reporte destacado
              </p>
              <h3 className="mt-2 text-2xl font-black text-[#18332e]">
                Procedimientos PyM
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Consulta los indicadores de producción de procedimientos de
                promoción y mantenimiento de la salud.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#18332e]">
              Abrir reporte
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
          <div className="mt-8 hidden items-end sm:flex">
            <Building2 className="size-24 text-primary/15" aria-hidden="true" />
          </div>
        </Link>
      </section>
    </div>
  );
}
