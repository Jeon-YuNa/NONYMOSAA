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
  // if (typeof innerText == "string") {
  //   return innerText;
  // } else {
  //   innerText;
  // }
  return (
    <div className="pb-6">
      <strong onClick={toggleClick} className="text-sm text-neutral-600">
        {text}
      </strong>
      <p
        style={click ? { display: "block" } : { display: "none" }}
        className="text-xs text-neutral-600"
      >
        {innerText}
      </p>
      {/* {innerText.map((v) => {
        return (
          <p
            style={click ? { display: "block" } : { display: "none" }}
            className="text-xs text-neutral-600"
          >
            {v}
          </p>
        );
      })} */}
    </div>
  );
};
export default DetailToggle;
