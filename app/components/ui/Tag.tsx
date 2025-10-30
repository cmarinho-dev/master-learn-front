import { CircleUser } from "lucide-react";

function Tag(props: { textContent: string; additionalClass?: string }) {
  return (
    <div
      className={`flex items-center gap-2 border border-emphasis rounded-4xl py-[1.75px] px-1.5 w-min whitespace-nowrap text-sm text-text-secondary ${
        props.additionalClass ?? ""
      }`}
    >
      <CircleUser size={16} />
      <p>{props.textContent}</p>
    </div>
  );
}

export default Tag;
