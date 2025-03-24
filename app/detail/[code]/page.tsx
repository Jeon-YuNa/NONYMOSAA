"use client";
import { use } from 'react';
import { useSearchParams } from "next/navigation";
import DetailPage from "./components/DetailPage";

const DetailCodePage = ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = use(params);
  const searchParams = useSearchParams();
  const hex = searchParams.get("hex"); // 쿼리 파라미터에서 hex 값을 가져옴
  console.log(code, hex); // code와 hex 출력

  return (
    <>
      <section className="mt-60">
        <DetailPage code={code} hex={hex!} />
      </section>
    </>
  );
};

export default DetailCodePage;
