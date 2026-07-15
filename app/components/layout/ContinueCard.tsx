import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/buttons/Button";

function ContinueCard() {
  const progress = 90;

  return (
    <Container additionalClass={"flex flex-col flex-wrap p-6"}>
      <h2 className="text-xl font-semibold">Continue o seu aprendizado</h2>
      <div className="flex flex-wrap mt-4 gap-6">
        <div className="bg-gray-400 overflow-hidden rounded-md w-[280px] h-40">
          <Image
            src={"/lideranca.jpg"}
            alt="Capa do curso Liderança e Gestão"
            width={280}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-[260px]">
          <div className="flex flex-col h-full px-1 sm:px-4 py-3 gap-4 justify-between">
            <h3 className="text-xl font-semibold">Liderança e Gestão</h3>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col flex-1 min-w-[200px] text-text-secondary">
                <div>Próxima Lição: Comunicação Eficaz</div>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Progresso do curso"
                    className="flex-1 min-w-32 h-3 bg-neutral-700 rounded-full"
                  >
                    <div
                      className="h-3 bg-primary rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="text-text-primary font-medium">
                    {progress}%
                  </span>
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
