import { ProductType } from "@/app/main/components/mainComponent/productType";
import DetailImage from "./subComponents/DetailImage";

const ImageArticle = ({ productImage }: ProductType) => {
  return (
    <article className="w-[50vw] overflow-hidden">
      <DetailImage productImage={productImage} />
    </article>
  );
};
export default ImageArticle;
