import React from "react";
import { ProductType } from "../wishListType";
import WishListButton from "./subComponents/WishListButton";
import WishListImage from "./subComponents/WishListImage";
import WishListPrice from "./subComponents/WishListPrice";
import WishListTitle from "./subComponents/WishListTitle";
import Link from "next/link";

export type WishListButtonProps = {
  toggleHandler: (id: string) => void;
};

const WishList = ({
  id,
  productImage,
  productName,
  productPrice,
  productCode,
  productHexCodes,
  toggleHandler,
}: ProductType & WishListButtonProps) => {
  if (!productHexCodes) return "";
  const hexCode = productHexCodes[0].slice(-6);
  return (
    <li
      className="flex justify-between"
      style={{ borderBottom: "1px solid #eee" }}
    >
      <Link href={`/detail/${productCode}?hex=${hexCode}`}>
        <div className="listForm flex">
          <WishListImage productImage={productImage} />
          <div className="px-4 py-6">
            <WishListTitle productName={productName} />

            <WishListPrice productPrice={productPrice} />
          </div>
        </div>
      </Link>

      <WishListButton id={id} toggleHandler={toggleHandler} />
    </li>
  );
};
export default WishList;
