import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/buttons/Button";

function Event() {
  return (
    <Container
      additionalClass={
        "flex flex-wrap justify-between items-center gap-6 overflow-hidden"
      }
    >
      <div className="flex flex-col gap-4 p-6 md:p-10 text-wrap max-w-3xl flex-1 min-w-[280px]">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
          O DIA CHEGOU: <span className="text-emphasis">MASTER LEARN</span>{" "}
          está disponível!
        </h1>
        <p className="text-text-secondary leading-relaxed">
          Junte-se a nós e aproveite todo o conteúdo imersivo e único que temos
          para oferecer.{" "}
          <span className="font-semibold text-text-primary">
            Somente hoje por apenas R$ 99,90!
          </span>{" "}
          Aproveite esta oportunidade exclusiva para transformar seu
          aprendizado.
        </p>
        <div className="mt-2">
          <Button label="Aproveitar Oferta" />
        </div>
      </div>
      <div className="rounded-md overflow-hidden w-full lg:w-auto lg:max-w-[550px]">
        <Image
          src={"/event.jpg"}
          alt="Banner de lançamento da plataforma Master Learn"
          width={550}
          height={280}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    </Container>
  );
}

export default Event;
