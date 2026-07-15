import { Link2 } from "lucide-react";
import MinimalButton from "../ui/buttons/MinimalButton";
import Container from "../ui/Container";

const links = [
  { title: "Termos de Serviço", url: "www.exemplo.com/termos" },
  { title: "Política de Privacidade", url: "www.exemplo.com/privacidade" },
  { title: "Suporte ao Cliente", url: "www.exemplo.com/suporte" },
];

function Subscription() {
  return (
    <Container additionalClass="flex flex-col gap-6 p-5 rounded-2xl w-80">
      <h2 className="text-xl font-semibold">Avance na sua carreira</h2>
      <p className="text-text-secondary">
        Assine nossa plataforma e tenha acesso ilimitado a todos os cursos.
      </p>
      <MinimalButton textContent="Assinar Agora" />
      <h3 className="font-semibold">Links adicionais</h3>
      <ul className="flex flex-col gap-3 text-text-secondary">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href="#"
              className="flex items-center gap-3 group rounded-md focus-visible:outline-2 focus-visible:outline-primary"
            >
              <Link2 className="size-[18px] group-hover:text-primary transition-colors" />
              <span>
                <span className="block text-[0.95rem] group-hover:text-text-primary transition-colors">
                  {link.title}
                </span>
                <span className="block text-sm text-cyan-100">{link.url}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Subscription;
