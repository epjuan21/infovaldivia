type PageHeaderProps = {
  titulo: string;
  descripcion?: string;
};

export function PageHeader({ titulo, descripcion }: PageHeaderProps) {
  return (
    <header className="space-y-1">
      <h1 className="text-3xl font-bold tracking-tight">{titulo}</h1>
      {descripcion && <p className="text-muted-foreground">{descripcion}</p>}
    </header>
  );
}
