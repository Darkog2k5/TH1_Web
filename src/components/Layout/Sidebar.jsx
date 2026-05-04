import { Link } from "react-router-dom";
import MenuIcon from "../MenuIcon/MenuIcon.jsx";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <>
      <div
        className="fixed top-[100px] left-5 z-[1000] flex items-center gap-2 cursor-pointer text-gray-800 bg-white p-3 rounded-md shadow-md hover:bg-gray-50 transition"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <MenuIcon />
        <span className="font-semibold">Category</span>
      </div>

      <div
        className={`fixed top-[150px] left-5 bg-white p-3 w-[200px] rounded-lg shadow-xl border border-gray-200 z-[999] transition-all duration-300 ${
          showSidebar
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-1">
          <Link
            to="/category/laptop"
            className="block text-gray-800 p-2 rounded-md hover:bg-gray-100 hover:text-primary transition"
          >
            Laptop
          </Link>
          <Link
            to="/category/pc"
            className="block text-gray-800 p-2 rounded-md hover:bg-gray-100 hover:text-primary transition"
          >
            PC
          </Link>
          <Link
            to="/"
            onClick={() => setShowSidebar(false)}
            className="block text-gray-800 p-2 rounded-md hover:bg-gray-100 hover:text-primary transition mt-2 border-t"
          >
            Tất cả Products
          </Link>
        </div>
      </div>
    </>
  );
}
