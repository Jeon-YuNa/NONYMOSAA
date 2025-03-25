import CountButton from "./CountButton";

type CountBtnWrapProps = {
  price: number;
  count: number;
  plusHandler: () => void;
  minusHandler: () => void;
};

const CountBtnWrap = ({
  count,
  price,
  plusHandler,
  minusHandler,
}: CountBtnWrapProps) => {
  return (
    <div className="flex justify-between items-center">
      <div
        className="bg-white w-fit flex"
        style={{
          borderTop: "1px solid #ccc",
          borderBottom: "1px solid #ccc",
        }}
      >
        <CountButton text={"-"} handler={minusHandler} />
        <span className="px-6 py-2 flex items-center justify-center text-sm">
          {count}
        </span>
        <CountButton text={"+"} handler={plusHandler} />
      </div>
      <span className="text-sm">₩{price * count},000</span>
    </div>
  );
};

export default CountBtnWrap;
