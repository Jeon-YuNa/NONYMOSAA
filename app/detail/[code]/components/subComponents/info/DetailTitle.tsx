import { ProductType } from "@/app/main/components/mainComponent/productType";

const DetailTitle = ({ productName, productPrice }: ProductType) => {
  return (
    <div className="pb-10" style={{ borderBottom: "1px solid #eee" }}>
      <p className="text-sm">{productName}</p>
      <strong className="text-sm">₩{productPrice}</strong>
    </div>
  );
};
export default DetailTitle;
