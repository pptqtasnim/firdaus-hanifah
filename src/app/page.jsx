"use client";
import Banner from "@/components/banner";

const page = ({ searchParams }) => {
  const q = searchParams;
  const nameUser = q.name;

  if (nameUser) {
    return (
      <div className="px-5 ">
        <Banner name={nameUser} />
      </div>
    );
  }
  return;
};
export default page;
