import { ProductType } from "@/app/main/components/mainComponent/productType";
import DetailDesc from "./info/DetailDesc";
import DetailColors from "./info/DetailColors";
import DetailToggle from "./info/DetailToggle";

const DetailInfo = ({
  productCode,
  info,
  notice,
  productHexCodes,
  details,
  materials,
}: ProductType) => {
  if (!details) return "";
  if (!materials) return "";

  return (
    <div className="py-8 mb-16" style={{ borderBottom: "1px solid #eee" }}>
      <DetailDesc info={info} notice={notice} />
      <DetailColors
        productCode={productCode}
        productHexCodes={productHexCodes}
      />
      <DetailToggle text={"Details +"} innerText={details} />
      <DetailToggle text={"Materials & Care +"} innerText={materials} />
    </div>
  );
};
export default DetailInfo;
