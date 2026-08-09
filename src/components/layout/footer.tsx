import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#d9e7e2] bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-9 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <Image
            src="/logo.png"
            alt="ESE Hospital San Juan de Dios"
            width={4041}
            height={1758}
            className="h-11 w-auto max-w-full object-contain object-left"
          />
          <p className="mt-4 text-sm font-bold text-[#18332e]">
            ESE Hospital San Juan de Dios
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Valdivia, Antioquia
          </p>
        </div>

        <div className="grid gap-6 border-t border-[#d9e7e2] pt-6 text-sm sm:grid-cols-2 lg:border-0 lg:pt-0 lg:text-right">
          <div>
            <p className="text-xs font-bold uppercase text-[#66847e]">Identificación</p>
            <p className="mt-2 font-bold text-[#18332e]">NIT 891.982.129-7</p>
            <p className="mt-1 text-muted-foreground">
              Código de habilitación 058540457701
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-[#66847e]">Autor</p>
            <p className="mt-2 font-bold text-[#18332e]">Juan Fernando Ramírez</p>
            <p className="mt-1 text-muted-foreground">Diseño y desarrollo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}