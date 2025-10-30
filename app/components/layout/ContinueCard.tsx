import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/buttons/Button";

function ContinueCard() {
  return (
    <Container additionalClass={"flex flex-col flex-wrap p-6"}>
      <h1 className="text-xl font-semibold">Continue o seu aprendizado</h1>
      <div className="flex flex-wrap mt-4 gap-6">
        <div className="bg-gray-400 overflow-hidden rounded-md w-[280px] h-40">
          <Image
            src={"/lideranca.jpg"}
            alt="Course Image"
            width={280}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col h-full px-4 py-3 gap-4 justify-between">
            <h2 className="text-xl font-semibold">Liderança e Gestão</h2>
            <div className="flex flex-row items-center gap-9">
              <div className="flex flex-col text-text-secondary">
                <div>Próxima Lição: Comunicação Eficaz</div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="min-w-48 h-3 bg-neutral-700 rounded-full">
                    <div className="w-32 h-3 bg-primary rounded-full"></div>
                  </div>
                  90%
                </div>
              </div>
              <Button label="Continuar Curso" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContinueCard;
