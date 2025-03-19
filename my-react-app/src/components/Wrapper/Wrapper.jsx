import React from "react";
import SvgLeft from "../Svg/SvgLeft.jsx";
import SvgRight from "../Svg/SvgRight.jsx";

const Wrapper = ({
  pictures,
  currentImageIndex,
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <div className="wrapper">
      {pictures.length > 1 && (
        <button onClick={handlePrevClick}>
          <SvgLeft />
        </button>
      )}
      <img
        src={pictures[currentImageIndex]}
        alt={`Logement ${currentImageIndex + 1}`}
      />
      {pictures.length > 1 && (
        <div className="image-counter">
          {currentImageIndex + 1}/{pictures.length}
        </div>
      )}
      {pictures.length > 1 && (
        <button onClick={handleNextClick}>
          <SvgRight />
        </button>
      )}
    </div>
  );
};

export default Wrapper;
