import { ProductType } from "@/app/main/components/mainComponent/productType";
import { useState } from "react";

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
  const formattedPrice = Number(String(productPrice).split(",")[0]);
  console.log(productPrice);
  return (
    <div>
      <div className="bg-zinc-100 p-3">
        <p
          className="border-dashed"
          style={{ borderBottom: "1px dashed #ccc" }}
        >
          수량
        </p>
        <div>
          <div className="count">
            <span onClick={minusCount}>-</span>
            <span>{count}</span>
            <span onClick={plusCount}>+</span>
          </div>
          <span>₩{formattedPrice * count},000</span>
        </div>
      </div>
      <p className="py-10">
        <span>총 상품금액({count})</span>{" "}
        <strong>₩{formattedPrice * count},000</strong>
      </p>
    </div>
  );
};
export default DetailCount;
