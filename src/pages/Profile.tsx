import Transactions from "../components/features/Transactions";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

//* page can have information about the wallet- eth in it and recent transactions for NFTs

//* info about their wallet- metamask, and the other types

//!!!! FIX ANY
const Profile = ({ accountAdded }: any) => {
  const [userBalance, setUserBalance] = useState<string | null>();

  useEffect(() => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [accountAdded, "latest"],
      })
      .then((balance: ethers.BigNumberish) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  }, [accountAdded]);

  return (
    <div className="flex flex-col h-full w-full p-4">
      <h1 className="font-bold truncate text-lg">{accountAdded}</h1>
      <h1 className="italic">Current balance: {userBalance}</h1>
      <Transactions />
    </div>
  );
};

export default Profile;
