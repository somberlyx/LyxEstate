import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-swissCoffee shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-bisonHide-600">Lyx</span>
            <span className="text-pharlap-800">Estate</span>
          </h1>
        </Link>
        <form className="bg-snuff p-3 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-pharlap" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-pharlap-900 hover:underline hover:cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-pharlap-900 hover:underline hover:cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-pharlap-900 hover:underline hover:cursor-pointer">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
