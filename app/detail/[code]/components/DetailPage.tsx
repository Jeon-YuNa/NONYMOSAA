import { fetchData } from "@/app/main/data/data";
import { ProductType } from "@/app/main/components/mainComponent/productType";
import { useEffect, useState } from "react";
import ImageArticle from "./subComponents/ImageArticle";
import InfoArticle from "./subComponents/InfoArticle";
type DetailPageProps = {
  code?: string;
  hex: string | null;
};
const DetailPage = ({ code, hex }: DetailPageProps) => {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = (await fetchData()) as ProductType[]; // 타입 단언
      setData(fetchedData);
    };

    loadData();
  }, []);
  const dataFilter = data.filter(
    (v) => v.productCode == code && v.productHexCodes![0].includes(`#${hex}`)
  );
  console.log(`dataFilter:${dataFilter}`);

  if (dataFilter.length === 0) {
    return <div>상품 준비 중.</div>;
  }
  return (
    <section className="mt-60 flex px-14 pb-14 gap-6 justify-between">
      {dataFilter.map((v, i) => {
        const price = v
          .productPrice!.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const productDetails = v.productDetails!.replace(/\r\n/g, "<br>");
        const productMaterials = v.productMaterials!.replace(/\r\n/g, "<br>");
        console.log(productDetails);
        return (
          <>
            <ImageArticle key={i} productImage={v.productImage} />
            <InfoArticle
              {...v}
              productPrice={price}
              productDetails={productDetails}
              productMaterials={productMaterials}
            />
          </>
        );
      })}
    </section>
  );
};

export default DetailPage;
