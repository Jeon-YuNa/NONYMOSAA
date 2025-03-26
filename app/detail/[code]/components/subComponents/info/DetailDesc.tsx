import { ProductType } from "@/app/main/components/mainComponent/productType";

const DetailDesc = ({ info, notice }: ProductType) => {
  return (
    <div>
      {info?.map((v, i) => {
        return (
          <p key={`info${i}`} className="text-xs text-neutral-500 leading-5">
            {v}
          </p>
        );
      })}
      <div className="my-8">
        {notice?.map((v, i) => {
          return (
            <strong
              key={`notice${i}`}
              className="text-xs text-neutral-600 block leading-5"
            >
              {v}
            </strong>
          );
        })}
      </div>
    </div>
  );
};
export default DetailDesc;
