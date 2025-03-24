import DetailButton from "@/app/wish/components/detailBtn/Detail.Button";
import DetailTitle from "./subComponents/DetailTitle";
import { ProductType } from "@/app/main/components/mainComponent/productType";
import DetailInfo from "./DetailInfo";
import DetailOrigin from "./subComponents/DetailOrigin";
import DetailCount from "./subComponents/DetailCount";

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
    <article className="w-[50%]">
      <DetailTitle productName={productName} productPrice={productPrice} />
      <DetailInfo
        productCode={productCode}
        productInfo={productInfo}
        productNotice={productNotice}
        productHexCodes={productHexCodes}
        productDetails={productDetails}
        productMaterials={productMaterials}
      />
      {/* <div>
        <p>{productDetails}</p>
        <p>{productMaterials}</p>
      </div> */}
      <DetailOrigin
        key={productOrigin}
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
