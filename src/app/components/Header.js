import React from "react";
import PropTypes from "prop-types";
import "../styles/header.css";

function Header({
  imageSrc,
  imageAlt,
  mainText,
  mainTextColor,
  subText,
  imageSize = 100,
  imageStyle,
}) {
  return (
    <div className="header-container">
      <div className="header-image">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="profile-image"
          style={{
            width: imageSize,
            height: imageSize,
            ...imageStyle,
          }}
        />
      </div>
      <div className="header-text">
        <h1 style={{ color: mainTextColor }}>{mainText}</h1>
        <p>{subText}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  mainText: PropTypes.string.isRequired,
  mainTextColor: PropTypes.string,
  subText: PropTypes.string,
  imageSize: PropTypes.number,
  imageStyle: PropTypes.object,
};

Header.defaultProps = {
  imageAlt: "Header image",
  mainTextColor: "#000",
  imageSize: 100,
  imageStyle: {},
};

export default Header;
