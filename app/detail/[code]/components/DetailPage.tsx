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

        // let productDetails: string[];
        // const productMaterials = v.productMaterials!.replace(/\r\n/g, "<br />");
        // if (typeof v.productDetails == "string") {
        //   productDetails = v.productDetails.split(/\r\n/g);
        // } else {
        //   productDetails = v.productDetails!;
        // }
        // console.log(productDetails);
        return (
          <>
            <ImageArticle productImage={v.productImage} />
            <InfoArticle {...v} productPrice={price} />
          </>
        );
      })}
    </section>
  );
};

export default DetailPage;
