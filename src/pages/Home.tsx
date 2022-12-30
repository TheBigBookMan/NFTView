import Me from "../images/Me.jpg";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p>
        This is an NFT view app where you can connect your wallet and view your
        NFTs.
      </p>
      <ul className="flex flex-wrap w-full h-full justify-center">
        <li className="flex flex-col shadow-lg rounded-lg">
          <img src={Me} className="w-full max-w-[320px] rounded-t-xl" />
          <div className="flex flex-col p-4">
            <div className="flex gap-2">
              <h1 className="font-bold">Name here</h1>
              <p className="font-bold">#number</p>
            </div>
            <h1 className="font-bold">Price here ETH</h1>
            <div className="flex gap-3">
              <p>Blockchain here</p>
              <p>Blockchaun symbol here</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
