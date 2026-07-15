import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-foreground border-border border-t-2 mt-10">
      <div className="px-4 sm:px-5 md:px-18 lg:px-24 py-8 flex flex-wrap gap-6 justify-between items-center">
        <div>
          <p className="font-bold tracking-wide">
            MASTER <span className="text-primary">LEARN</span>
          </p>
          <p className="text-sm text-text-secondary mt-1">
            Aprendizado imersivo, no seu ritmo.
          </p>
        </div>
        <nav aria-label="Links do rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
            <li>
              <Link href={"/"} className="hover:text-primary transition-colors">
                Termos de Serviço
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-primary transition-colors">
                Suporte
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()} Master Learn. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
