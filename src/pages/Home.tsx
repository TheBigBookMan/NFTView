import Listings from "../components/features/Listings";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p>
        This is an NFT view app where you can connect your wallet and view your
        NFTs that are on OpenSea. Create a wallet if you haven't{" "}
        <a href="https://metamask.io/" target="_blank">
          <span className="underline font-bold">here... </span>
        </a>
        and an OpenSea account{" "}
        <a href="https://opensea.io/" target="_blank">
          <span className="underline font-bold">here...</span>
        </a>
      </p>
      <Listings />
    </div>
  );
};

export default Home;
