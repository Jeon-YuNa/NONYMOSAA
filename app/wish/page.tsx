import WishComponent from "./components/WishComponent";
import "./css/media.css";
const WishPage = async () => {
  return (
    <>
      <section className="my-60 px-[15vw]">
        <h2 className="p-3 mb-2 text-xl">Wish List</h2>
        <WishComponent />
      </section>
    </>
  );
};
export default WishPage;
