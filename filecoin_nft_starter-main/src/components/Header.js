import React from "react";
import creativeArtboard from "../assets/creativeArtboard.svg";

const Header = () => {
  return (
    <>
      <a
        href="https://hackathons.filecoin.io/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="Creative Logo"
          style={{ height: "200px" }}
          src={creativeArtboard}
        ></img>
      </a>
      <p className="header gradient-text">Creative NFTHack NFT Collection</p>
      <p className="sub-text">
        100 personalised NFTs for Beta Testing Creative platform
      </p>
    </>
  );
};

export default Header;
