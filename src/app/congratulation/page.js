"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import CongratulationPage from "@/components/congratulation";

export default function Buy() {
  const router = useRouter();
  const data = useSelector((state) => state.buyPageSelectedTicket);
  if (data.categoryId < 1) {
    router.push("/");
  }

  return (
    <main id="tt-pageContent">
      <div className="subpages-inner section-marker">
        <div className="container container-fluid-lg">
          <CongratulationPage />
        </div>
      </div>
    </main>
  );
}
