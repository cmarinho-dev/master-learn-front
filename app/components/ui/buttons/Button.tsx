type ButtonProps = {
  label: string;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="bg-primary hover:bg-primary-hover text-background font-semibold rounded-3xl px-5 py-1.5 cursor-pointer transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {props.label}
    </button>
  );
}
export default Button;
