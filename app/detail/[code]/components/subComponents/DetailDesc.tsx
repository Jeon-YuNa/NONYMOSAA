import { ProductType } from "@/app/main/components/mainComponent/productType";

const DetailDesc = ({ productInfo, productNotice }: ProductType) => {
  return (
    <div>
      {productInfo?.map((v: string, i) => (
        <p key={v[i]} className="text-xs text-neutral-500 leading-5">
          {v}
        </p>
      ))}
      <strong className="text-xs text-neutral-600 my-8 block">
        {productNotice}
      </strong>
    </div>
  );
};
export default DetailDesc;
