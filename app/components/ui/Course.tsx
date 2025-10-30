import Image from "next/image";
import Container from "./Container";
import Tag from "./Tag";

function Course(props: {
  name: string;
  description: string;
  author: string;
  coverUrl?: string;
}) {
  return (
    <Container additionalClass="transform transition-transform duration-150 ease-out hover:scale-[1.02] cursor-pointer max-w-[320px] w-full">
      <div className="flex flex-col">
        <div className="mb-4 overflow-hidden rounded-md w-full">
          <img
            src={props.coverUrl || "/placeholder.png"}
            alt={props.name}
            className="w-full h-44 object-cover block"
          />
        </div>
        <Tag textContent={props.author} additionalClass="ms-[5px] mb-3" />
        <h1 className="font-semibold text-xl px-2 mb-1 line-clamp-2">
          {props.name}
        </h1>
        <p className="text-sm text-text-secondary px-2 mb-2 line-clamp-3">
          {props.description}
        </p>
      </div>
    </Container>
  );
}

export default Course;
