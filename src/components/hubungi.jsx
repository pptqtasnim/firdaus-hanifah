import Link from "next/link";

const Hubungi = () => {
  return (
    <Link
      className="fixed bottom-2 text-[13px] right-2 bg-green-800 p-2 rounded-lg text-white animate-bounce"
      href={"https://wa.me/+6281283345887"}
      target="_blank"
    >
      Hubungi Kami
    </Link>
  );
};
export default Hubungi;
