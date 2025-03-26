import Link from "next/link";
import Navigation from "./navigation";
import MainLogo from "../MainLogo";

const Header = () => {
  return (
    <header className="p-3 fixed top-0 w-full z-[999] bg-white">
      <Navigation />

      <h1 style={{ display: "flex", justifyContent: "center", transform: "scale(1.5)" }}>
        <Link href={"/main"} style={{ display: "inline-block" }}>
          <MainLogo
            link={"https://cdn.imweb.me/thumbnail/20241021/b71f086e49061.png"}
          />
        </Link>
      </h1>
    </header>
  );
};
export default Header;
