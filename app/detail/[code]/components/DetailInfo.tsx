import { ProductType } from "@/app/main/components/mainComponent/productType";
import DetailDesc from "./subComponents/DetailDesc";
import DetailColors from "./subComponents/DetailColors";

const DetailInfo = ({
  productCode,
  productInfo,
  productNotice,
  productHexCodes,
  productDetails,
  productMaterials,
}: ProductType) => {
  return (
    <div className="py-8 mb-16" style={{ borderBottom: "1px solid #eee" }}>
      <DetailDesc
        key={productCode}
        productInfo={productInfo}
        productNotice={productNotice}
      />
      <DetailColors
        productCode={productCode}
        productHexCodes={productHexCodes}
      />
      <p className="text-xs text-neutral-600">{productDetails}</p>
      <p className="text-xs text-neutral-600">{productMaterials}</p>
    </div>
  );
};
export default DetailInfo;
