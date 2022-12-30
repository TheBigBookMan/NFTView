import Header from "./components/common/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//TODO GET BETTER FONTFAMILY

//* This is a NFT viewer app marketplace

//* WIll combine in the connect wallet for web3--- webjs library

//* Users will be able to view their NFTs and interact...

//* could have the information if the NFT is up on a website like OpenSea and golden eden (whatever solana one is)

//* Maybe have a login database- MongoDB maybe

//* Maybe allow users to interact and buy and sell- could be advanced and show can make a transaction happening

interface AccountTypes {
  accountAdded: string | null;
  setAccountAdded: () => void;
}

function App() {
  const [accountAdded, setAccountAdded] = useState<AccountTypes>();
  console.log(accountAdded);
  return (
    <div className="flex flex-col">
      <Header setAccountAdded={setAccountAdded} accountAdded={accountAdded} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
