import { useState } from "react";
import { Link } from "react-router-dom";

//!!!! GET RID OF ANY
const Header = ({ setAccountAdded, accountAdded }: any) => {
  const [navOn, setNavOn] = useState<string>("Home");

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any[]) => {
          accountChangedHandler(result[0]);
        });
    } else {
      alert("Please install MetaMask");
    }
  };

  const accountChangedHandler = (newAccount: any) => {
    setAccountAdded(newAccount);
  };

  return (
    <div className="flex justify-between items-center p-2 border-b h-[60px]">
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
        {accountAdded ? (
          <li className="truncate w-[100px] md:w-full" key={accountAdded}>
            {accountAdded}
          </li>
        ) : (
          <li
            onClick={connectWallet}
            className="border-solid border-2 border rounded-lg p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer"
          >
            Connect Wallet
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
