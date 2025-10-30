import Link from "next/link";

function Header() {
  return (
    <header className="bg-foreground text-emphasis flex w-screen border-border border-b-2 py-6 px-4 justify-between items-center">
      <h3 className="font-bold">MASTER LEARN</h3>
      <nav className="flex gap-8 items-center font-semibold">
        <ul className="flex gap-5 items-center">
          <li className="hover:shadow-xl py-1 px-2 rounded-xl">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:shadow-xl py-1 px-2 rounded-xl">
            <Link href={"/"}>Marketplace</Link>
          </li>
          <li>
            <Link
              className="bg-foreground rounded-sm shadow shadow-zinc-900 px-4 py-2"
              href={"/"}
            >
              DASHBOARD
            </Link>
          </li>
        </ul>
        <div className="bg-yellow-500 size-10 rounded-full"></div>
      </nav>
    </header>
  );
}

export default Header;
