type ButtonProps = {
  label: string;
};

function Button(props: ButtonProps) {
  return (
    <button className="bg-primary hover:bg-primary-hover text-foreground font-semibold rounded-3xl px-5 py-1.5 cursor-pointer transition">
      {props.label}
    </button>
  );
}
export default Button;
