import Image from "../assets/image/home.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="fixed inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>

      <div className="fixed z-10 flex flex-col items-start justify-center h-screen px-8 md:px-20">
        <p className="text-[#0a0a1f] text-sm mb-2">
          A Unique, Intangible Quality.
        </p>
        <h1 className="text-[#0a0a1f] text-3xl md:text-5xl font-bold mb-6">
          Perfect Match for Elegant Impression
        </h1>

        <Link
          to="/catalogue"
          className="inline-block px-8 py-4 font-semibold text-[#d4af37] bg-transparent border-2 border-[#d4af37] rounded-lg shadow-lg transition-all duration-300 cursor-pointer"
        >
          VIEW CATALOGUE
        </Link>
      </div>
    </div>
  );
}
