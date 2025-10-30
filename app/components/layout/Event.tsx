import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/buttons/Button";

function Event() {
  return (
    <Container additionalClass={"flex flex-wrap justify-between items-center"}>
      <div className="flex flex-col gap-4 p-12 text-wrap max-w-3xl">
        <h1 className="text-xl font-semibold">
          O DIA CHEGOU: <span className="text-emphasis">MASTER LEARN</span> está
          disponível!
        </h1>
        <p className="text-text-secondary">
          Junte-se a nós e aproveite todo o conteúdo imersivo e único que temos
          para oferecer.{" "}
          <span className="font-semibold text-text-primary">
            Somente hoje por apenas R$ 99,90!
          </span>{" "}
          Aproveite esta oportunidade exclusiva para transformar seu
          aprendizado.
        </p>
        <div>
          <Button label="Continuar Curso" />
        </div>
      </div>
      <div className="rounded-md bg-cyan-200 overflow-hidden">
        <Image src={"/event.jpg"} alt="Event Image" width={550} height={280} />
      </div>
    </Container>
  );
}

export default Event;
