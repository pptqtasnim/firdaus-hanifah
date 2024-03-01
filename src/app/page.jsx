"use client";
import Countdown from "@/components/countdown";
import { useParams } from "next/navigation";

const page = ({ searchParams }) => {
  const q = searchParams;
  const nameUser = q.name;
  if (nameUser) {
    return (
      <div>
        <div className="text-center">
          <h1>Selamat Datang</h1>
          <p>{nameUser}</p>
        </div>
        <div>
          <Countdown />
        </div>
      </div>
    );
  }
  return;
};
export default page;
