import Link from "next/link";

function Header() {
  return (
    <header className="bg-foreground sticky top-0 z-50 flex w-full border-border border-b-2 py-4 px-4 sm:px-6 justify-between items-center">
      <Link
        href={"/"}
        className="font-bold tracking-wide text-text-primary focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
      >
        MASTER <span className="text-primary">LEARN</span>
      </Link>
      <nav aria-label="Navegação principal">
        <ul className="flex gap-2 sm:gap-5 items-center font-semibold">
          <li className="hidden sm:block">
            <Link
              href={"/"}
              className="text-emphasis hover:text-primary transition-colors py-1 px-2 rounded-xl focus-visible:outline-2 focus-visible:outline-primary"
            >
              Home
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href={"/"}
              className="text-emphasis hover:text-primary transition-colors py-1 px-2 rounded-xl focus-visible:outline-2 focus-visible:outline-primary"
            >
              Marketplace
            </Link>
          </li>
          <li>
            <Link
              className="border border-primary text-primary hover:bg-primary hover:text-background transition-colors rounded-sm px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={"/"}
            >
              DASHBOARD
            </Link>
          </li>
          <li>
            <button
              type="button"
              aria-label="Perfil do usuário"
              className="bg-yellow-500 size-10 rounded-full cursor-pointer ring-offset-2 ring-offset-foreground hover:ring-2 hover:ring-primary focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
            ></button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
