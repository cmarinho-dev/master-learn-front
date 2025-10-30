import { ArrowRight } from "lucide-react";

function MinimalButton(props: {
  textContent: string;
  additionalClass?: string;
}) {
  return (
    <button
      className={`flex items-center gap-2 w-min justify-center border-primary border-b whitespace-nowrap text-primary py-1.5 pe-1.5 text-sm rounded-t-md cursor-pointer transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-sm hover:bg-[rgba(127,255,212,0.06)] active:scale-95 ${
        props.additionalClass ?? ""
      }`}
    >
      <ArrowRight size={19} className="w-[19px] h-[19px]" />
      {props.textContent}
    </button>
  );
}

export default MinimalButton;
