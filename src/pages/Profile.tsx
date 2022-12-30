import Transactions from "../components/features/Transactions";

//* page can have information about the wallet- eth in it and recent transactions for NFTs

//* info about their wallet- metamask, and the other types

const Profile = () => {
  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="font-bold text-lg">Wallet name sosemas9398234h02983h4</h1>
      <Transactions />
    </div>
  );
};

export default Profile;
