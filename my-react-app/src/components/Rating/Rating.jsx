import React from "react";
import SvgFilledStar from "../Svg/SvgFilledStar.jsx";
import SvgEmptyStar from "../Svg/SvgEmptyStar.jsx";

const Rating = ({ rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <SvgFilledStar key={i} /> : <SvgEmptyStar key={i} />
      );
    }
    return stars;
  };

  return <div className="logement-rating">{renderStars(rating)}</div>;
};

export default Rating;
