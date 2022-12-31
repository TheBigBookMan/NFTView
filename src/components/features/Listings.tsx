import Me from "../../images/Me.jpg";
import { nfthardcode } from "../../utils/nfthardcode";

//TODO could add in the links to each telegram, twitter, discord etc that comes with the API with icons

const Listings = () => {
  return (
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
            <div className="flex justify-between">
              <p className="text-sm underline">Etherscan Link</p>
              <ul className="flex gap-1">
                <li>Discord</li>
                <li>Teleg</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Listings;
