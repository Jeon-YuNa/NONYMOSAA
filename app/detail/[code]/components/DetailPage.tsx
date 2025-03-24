
import { fetchData } from "@/app/main/data/data";
import { ProductType } from "@/app/main/components/mainComponent/productType";
import DetailButton from "@/app/wish/components/detailBtn/Detail.Button";
import { useEffect, useState } from "react";
type DetailPageProps = {
    code?: string;
    hex: string | null;
}
const DetailPage = ({code, hex}: DetailPageProps) => {
      const [data, setData] = useState<ProductType[]>([]);
    
      useEffect(() => {
        const loadData = async () => {
          const fetchedData = (await fetchData()) as ProductType[]; // 타입 단언
          setData(fetchedData);
        };
    
        loadData();
      }, []);
      const dataFilter = data.filter((v) => v.productCode == code && v.productHexCodes![0].includes(`#${hex}`));
console.log(dataFilter)

    if (dataFilter.length === 0) {
      return <div>상품 준비 중.</div>;
    }
    return <div>
      {dataFilter.map((v)=> {
        return <>
        <article>
        <img src={`${v.productImage![0]}`} alt="" />
      </article>
      <article>
        <DetailButton id={dataFilter[0].id!} />
      </article>
      </>
      })}
      
    </div>
}

export default DetailPage