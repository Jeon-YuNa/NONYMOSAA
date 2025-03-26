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
    return <div id="temporaryPage">상품 준비 중.</div>;
  }
  return (
    <section id="detail" className="mt-60 px-20 pb-14">
      {dataFilter.map((v) => {
        const price = v
          .productPrice!.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // const productDetails = "";
        // if (typeof v.productDetails === "string") {
        //   const productDetails = v.productDetails!.split("\n");
        //   console.log(productDetails);
        //   return productDetails;
        // }
        // const productMaterials =
        //   v.productMaterials?.replace(/\\r\\n|\\n|\\r/g, "\n") ?? "";
        // const materials = v.productMaterials!.split("\n");
        const info = v.productInfo!.split("\n");
        const notice = v.productNotice!.split("\n");
        const details = v.productDetails!.split("\n");
        const materials = v.productMaterials!.split("\n");
        // if (typeof v.productMaterials == "string") {
        //   const productMaterials = v.productMaterials!.split("\n");
        //   return productMaterials;
        // }
        return (
          <>
            <ImageArticle productImage={v.productImage} />
            <InfoArticle
              {...v}
              productPrice={price}
              details={details}
              materials={materials}
              info={info}
              notice={notice}
            />
          </>
        );
      })}
    </section>
  );
};

export default DetailPage;
