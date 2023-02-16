import React from "react";
import womenMobile from "../images/illustration-woman-online-mobile.svg";
import womenDesktop from "../images/illustration-woman-online-desktop.svg";
import illustrationBox from "../images/illustration-box-desktop.svg";

function IllustrationPicture() {
  return (
    <div className="illustration-picture">
      <picture>
        <source media="(max-width:720px)" srcSet={womenMobile} />
        <img
          className="illustration-women"
          src={womenDesktop}
          alt="illustration-woman-online"
        />
      </picture>
      <img
        className="illustration-box"
        src={illustrationBox}
        alt="illustration-box"
      />
    </div>
  );
}

export default IllustrationPicture;
