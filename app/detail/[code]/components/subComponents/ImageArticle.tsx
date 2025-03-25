import { ProductType } from "@/app/main/components/mainComponent/productType";
import DetailImage from "./img/DetailImage";

const ImageArticle = ({ productImage }: ProductType) => {
  return (
    <article className="overflow-hidden">
      <DetailImage productImage={productImage} />
    </article>
  );
};
export default ImageArticle;
