type CountButtonProps = {
  text: string;
  handler: () => void;
};

const CountButton = ({ text, handler }: CountButtonProps) => {
  return (
    <span
      className="flex items-center justify-center px-3 text-lg text-[#999] cursor-pointer"
      style={{ borderRight: "1px solid #ccc", borderLeft: "1px solid #ccc" }}
      onClick={handler}
    >
      {text}
    </span>
  );
};

export default CountButton;
