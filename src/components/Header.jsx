import { Fragment } from "react/jsx-runtime";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <Fragment>
      <nav className="flex items-center justify-between p-4 bg-linear-to-b from-black to-gray-800 shadow-2xl">
        <img
          src={NETFLIX_LOGO}
          width={120}
          className="mx-4"
          alt="Netflix Logo"
        />
        <ul className="flex items-center">
          <li className="text-white text-sm mx-4">About</li>
          <li className="text-white text-sm mx-4">Contact</li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Header;
