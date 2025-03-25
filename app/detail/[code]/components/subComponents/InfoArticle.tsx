import DetailButton from "@/app/wish/components/detailBtn/Detail.Button";
import DetailTitle from "./info/DetailTitle";
import { ProductType } from "@/app/main/components/mainComponent/productType";
import DetailInfo from "./DetailInfo";
import DetailOrigin from "./info/DetailOrigin";
import DetailCount from "./DetailCount";

const InfoArticle = ({
  id,
  productName,
  productPrice,
  productDetails,
  productMaterials,
  productCode,
  productInfo,
  productNotice,
  productHexCodes,
  productOrigin,
  productDeliveryMethod,
  productDeliveryPrice,
  productManufacturer,
}: ProductType) => {
  return (
    <article>
      <DetailTitle productName={productName} productPrice={productPrice} />
      <DetailInfo
        productCode={productCode}
        productInfo={productInfo}
        productNotice={productNotice}
        productHexCodes={productHexCodes}
        productDetails={productDetails}
        productMaterials={productMaterials}
      />
      <DetailOrigin
        productOrigin={productOrigin}
        productManufacturer={productManufacturer}
        productDeliveryMethod={productDeliveryMethod}
        productDeliveryPrice={productDeliveryPrice}
      />
      <DetailCount productPrice={productPrice} />
      <DetailButton id={id!} />
    </article>
  );
};
export default InfoArticle;
