type ContainerProps = {
  children?: React.ReactNode;
  additionalClass?: string;
};

function Container(prop: ContainerProps) {
  return (
    <div
      className={
        "bg-foreground border-border border-2 shadow-2xl rounded-md " +
        (prop.additionalClass ?? "")
      }
    >
      {prop.children}
    </div>
  );
}

export default Container;
