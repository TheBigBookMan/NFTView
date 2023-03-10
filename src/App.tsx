import Header from "./components/common/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//TODO GET BETTER FONTFAMILY

//* could have the information if the NFT is up on a website like OpenSea and golden eden (whatever solana one is)

//* Maybe allow users to interact and buy and sell- could be advanced and show can make a transaction happening

interface AccountTypes {
  accountAdded: string | null;
  setAccountAdded: () => void;
}

function App() {
  const [accountAdded, setAccountAdded] = useState<AccountTypes>();

  return (
    <div className="flex flex-col">
      <Header setAccountAdded={setAccountAdded} accountAdded={accountAdded} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<Profile accountAdded={accountAdded} />}
        />
      </Routes>
    </div>
  );
}

export default App;
