import Link from "next/link";
import { ProductType } from "../productType";

const ProductColors = ({ productCode, productHexCodes }: ProductType) => {
  if (!productHexCodes) return "";

  return (
    <div className="flex gap-2 mt-2 justify-center">
      {productHexCodes.map((v, i) => {
        const hexCode = productHexCodes[i].slice(-6);
        return (
          <Link key={i} href={`/detail/${productCode}?hex=${hexCode}`}>
            <span
              className="block mx-[auto] w-3 h-3 rounded-sm"
              style={{
                backgroundColor: `${productHexCodes[i]}`,
              }}
            ></span>
          </Link>
        );
      })}
      {/* <Link href={`../detail/${productName}${productHexCode}`}>
        <span
          style={{
            display: "block",
            margin: "0 auto",
            width: "10px",
            height: "10px",
            backgroundColor: `${productHexCode}`,
            borderRadius: "2px",
            border: "1px solid #000",
          }}
        ></span>
      </Link> */}
    </div>
  );
};
export default ProductColors;
