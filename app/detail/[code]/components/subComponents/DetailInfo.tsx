import { ProductType } from "@/app/main/components/mainComponent/productType";
import DetailDesc from "./info/DetailDesc";
import DetailColors from "./info/DetailColors";
import DetailToggle from "./info/DetailToggle";

const DetailInfo = ({
  productCode,
  productInfo,
  productNotice,
  productHexCodes,
  productDetails,
  productMaterials,
}: ProductType) => {
  if (!productDetails) return "";
  if (!productMaterials) return "";

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
      <DetailToggle text={"Details +"} innerText={productDetails} />
      <DetailToggle text={"Materials & Care +"} innerText={productMaterials} />
    </div>
  );
};
export default DetailInfo;
