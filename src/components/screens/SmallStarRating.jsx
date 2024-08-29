import React from "react";
import FullStar from "../../assets/svg/Small-star.svg";

function StarRating({ rating }) {
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img
        key={`full-${i}`}
        src={FullStar}
        alt="Full Star"
        style={{ width: "17px" }}
      />
    );
  }

  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
}

export default StarRating;
