import { ProductType } from "@/app/main/components/mainComponent/productType";
import { useState } from "react";
import CountBtnWrap from "./count/CountBtnWrap";

const DetailCount = ({ productPrice }: ProductType) => {
  const [count, setCount] = useState<number>(1);
  const plusCount = () => {
    setCount((prev) => prev + 1);
  };
  const minusCount = () => {
    setCount((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };
  if (!productPrice) return 0;
  const price = Number(String(productPrice).split(",")[0]);
  return (
    <div>
      <div className="bg-zinc-50 p-4">
        <p
          className="text-xs pb-3 mb-3"
          style={{ borderBottom: "1px dashed #ddd" }}
        >
          수량
        </p>
        <CountBtnWrap
          count={count}
          price={price}
          plusHandler={plusCount}
          minusHandler={minusCount}
        />
      </div>
      <p className="py-10 flex justify-between">
        <span className="text-xs text-[#666]">총 상품금액({count})</span>{" "}
        <strong className="text-sm">₩{price * count},000</strong>
      </p>
    </div>
  );
};
export default DetailCount;
