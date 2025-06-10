"use client";
import { use } from "react";
import { useSearchParams } from "next/navigation";
import DetailPage from "./components/DetailPage";
import "../css/media.css";

const DetailCodePage = ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = use(params);
  const searchParams = useSearchParams();
  const hex = searchParams.get("hex"); 
  console.log(code, hex); 

  return (
    <>
      <DetailPage code={code} hex={hex!} />
    </>
  );
};

export default DetailCodePage;
