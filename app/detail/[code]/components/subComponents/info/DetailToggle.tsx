import { useState } from "react";

type DetailToggleProps = {
  text: string;
  innerText: string | string[];
};
const DetailToggle = ({ text, innerText }: DetailToggleProps) => {
  const [click, setClick] = useState<boolean>(false);

  const toggleClick = () => {
    setClick((prev) => !prev);
  };
  if (typeof innerText == "string") {
    return innerText;
  } else {
    innerText;
  }

  return (
    <div className="pb-6">
      <strong
        onClick={toggleClick}
        className="text-sm text-neutral-600 mb-6 block"
      >
        {text}
      </strong>
      {innerText.map((v, i) => {
        return (
          <p
            key={i}
            style={click ? { display: "block" } : { display: "none" }}
            className="text-xs text-neutral-600 leading-5"
          >
            {v}
          </p>
        );
      })}
    </div>
  );
};
export default DetailToggle;
