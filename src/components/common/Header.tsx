import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOn, setNavOn] = useState<string>("Home");

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <h1 className="font-bold">NFTView</h1>
      <ul className="flex gap-3 items-center">
        <Link
          onClick={(): void => setNavOn("Home")}
          to="/"
          className={`cursor-pointer ${navOn === "Home" && "font-bold"}`}
        >
          Home
        </Link>
        <Link
          onClick={(): void => setNavOn("Profile")}
          to="/profile"
          className={`cursor-pointer ${navOn === "Profile" && "font-bold"}`}
        >
          Profile
        </Link>
        <li className="border-solid border-2 border rounded-lg p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer">
          Connect Wallet
        </li>
      </ul>
    </div>
  );
};

export default Header;
