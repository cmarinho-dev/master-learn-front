type OutlinedButtonProps = {
  label: string;
};

function OutlinedButton(props: OutlinedButtonProps) {
  return (
    <button
      type="button"
      className="border border-primary text-emphasis font-semibold text-lg hover:bg-primary hover:text-background rounded-3xl transition cursor-pointer px-6 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {props.label}
    </button>
  );
}
export default OutlinedButton;
