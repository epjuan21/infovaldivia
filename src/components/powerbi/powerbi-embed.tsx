type PowerBIEmbedProps = {
  url: string;
  titulo: string;
  ancho?: number;
  alto?: number;
};

export function PowerBIEmbed({
  url,
  titulo,
  ancho = 1024,
  alto = 1060,
}: PowerBIEmbedProps) {
  // Mantiene la proporción 1024:1060 en cualquier ancho (el reporte refluye al tamaño del iframe)
  return (
    <div
      className="mx-auto w-full"
      style={{ maxWidth: ancho, aspectRatio: `${ancho} / ${alto}` }}
    >
      <iframe
        title={titulo}
        src={url}
        allowFullScreen
        className="h-full w-full rounded-lg border border-border shadow-sm"
      />
    </div>
  );
}
