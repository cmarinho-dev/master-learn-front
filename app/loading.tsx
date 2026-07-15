function Loading() {
  return (
    <div className="px-4 sm:px-5 md:px-18 lg:px-24 py-6 space-y-10">
      <div className="animate-pulse bg-foreground border-border border-2 rounded-md h-72" />
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col flex-2 gap-12">
          <div className="animate-pulse bg-foreground border-border border-2 rounded-md h-56" />
          <div className="flex flex-wrap justify-center gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-foreground border-border border-2 rounded-md h-72 w-full max-w-[320px]"
              />
            ))}
          </div>
        </div>
      </div>
      <span className="sr-only">Carregando conteúdo…</span>
    </div>
  );
}

export default Loading;
