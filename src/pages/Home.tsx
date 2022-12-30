import Me from "../images/Me.jpg";
import { nfthardcode } from "../utils/nfthardcode";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p>
        This is an NFT view app where you can connect your wallet and view your
        NFTs. Create one already if you haven't{" "}
        <a href="https://metamask.io/" target="_blank">
          <span className="underline font-bold">here...</span>
        </a>
      </p>
      <ul className="flex flex-wrap gap-4 w-full h-full justify-center">
        {nfthardcode.map((nft, idx) => (
          <li
            key={nft.number + idx}
            className="flex flex-col shadow-lg rounded-lg"
          >
            <img src={Me} className="w-full max-w-[320px] rounded-t-xl" />
            <div className="flex flex-col p-4">
              <div className="flex gap-2">
                <h1 className="font-bold">{nft.name}</h1>
                <p className="font-bold">#{nft.number}</p>
              </div>
              <h1 className="font-bold">
                {nft.price} {nft.ticker}
              </h1>
              <div className="flex gap-3">
                <p>{nft.blockchain}</p>
                <p>symbol</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
