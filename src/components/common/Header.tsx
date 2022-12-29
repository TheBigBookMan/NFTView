const Header = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <h1 className="font-bold text-3xl">NFTView</h1>
      <ul className="flex gap-4 items-center">
        <li className="text-lg cursor-pointer">Home</li>
        <li className="text-lg cursor-pointer">Profile</li>
        <li className="text-lg border-solid border-2 border rounded-lg p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer">
          Connect Wallet
        </li>
      </ul>
    </div>
  );
};

export default Header;
