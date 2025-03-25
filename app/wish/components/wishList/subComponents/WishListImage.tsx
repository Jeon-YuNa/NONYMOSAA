import { ProductType } from "../../wishListType";

const WishListImage = ({ productImage }: ProductType) => {
  return (
    <div className="listImg px-4 py-3">
      <div className="w-32 h-32 overflow-hidden">
        <img src={`${productImage}`} alt="" />
      </div>
    </div>
  );
};
export default WishListImage;
