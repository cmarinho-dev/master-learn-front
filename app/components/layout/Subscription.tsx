import { Link2 } from "lucide-react";
import MinimalButton from "../ui/buttons/MinimalButton";
import Container from "../ui/Container";

function Subscription() {
  return (
    <Container additionalClass="flex flex-col gap-6 p-4 rounded-2xl w-80">
      <h2 className="text-xl">Avance na sua carreira</h2>
      <p className="text-text-secondary">
        Assine nossa plataforma e tenha acesso ilimitado a todos os cursos.
      </p>
      <MinimalButton textContent="Assinar Agora" />
      <h2>Links adicionais</h2>
      <ul className="flex flex-col gap-3 text-text-secondary">
        <li className="flex items-center gap-3 cursor-pointer">
          <Link2 className="size-[18px]" />
          <div>
            <h3 className="text-[0.95rem]">Termos de Serviço</h3>
            <p className="mt-[-0.80px] text-sm text-cyan-100">
              www.exemplo.com/termos
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3 cursor-pointer">
          <Link2 className="size-[18px]" />
          <div>
            <h3 className="text-[0.95rem]">Política de Privacidade</h3>
            <p className="mt-[-0.80px] text-sm text-cyan-100">
              www.exemplo.com/privacidade
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3 cursor-pointer">
          <Link2 className="size-[18px]" />
          <div>
            <h3 className="text-[0.95rem]">Suporte ao Cliente</h3>
            <p className="mt-[-0.80px] text-sm text-cyan-100">
              www.exemplo.com/suporte
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default Subscription;
