import Link from "next/link";
import { ProductType } from "@/app/main/components/mainComponent/productType";

const DetailColors = ({ productCode, productHexCodes }: ProductType) => {
  if (!productHexCodes || !Array.isArray(productHexCodes)) return null;

  return (
    <div className="flex gap-2 pb-6">
      {productHexCodes.map((v, i) => {
        return (
          <Link
            key={`hexcode${i}`}
            href={`/detail/${productCode}?hex=${v.slice(-6)}`}
            passHref
          >
            <span
              className="inline-block w-4 h-4 rounded-sm cursor-pointer"
              style={{ backgroundColor: v }}
            ></span>
          </Link>
        );
      })}
    </div>
  );
};

export default DetailColors;
