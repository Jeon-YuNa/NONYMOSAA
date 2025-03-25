import { ProductType } from "@/app/main/components/mainComponent/productType";

const DetailOrigin = ({
  productOrigin,
  productPrice,
  productDeliveryMethod,
  productManufacturer,
}: ProductType) => {
  return (
    <ul className="mb-5">
      <li className="text-xs mb-1">
        <strong className="mr-1">원산지</strong> <span>{productOrigin}</span>
      </li>
      <li className="text-xs mb-1">
        <strong className="mr-1">제조사</strong>
        <span>{productManufacturer}</span>
      </li>
      <li className="text-xs mb-1">
        <strong className="mr-1">배송방법</strong>
        <span>{productDeliveryMethod}</span>
      </li>
      <li className="text-xs mb-1">
        <strong className="mr-1">배송비</strong>
        <span>
          {Number(productPrice) >= 50000 ? "₩0" : "₩3,000"} (₩50,000원 이상
          무료배송)
        </span>
      </li>
    </ul>
  );
};
export default DetailOrigin;
