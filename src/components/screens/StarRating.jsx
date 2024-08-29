import React from "react";
import FullStar from "../../assets/svg/star.svg";
import HalfStar from "../../assets/svg/halfstar.svg";
import EmptyStar from "../../assets/svg/unfilstar.svg";

function StarRating({ rating }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img
        key={`full-${i}`}
        src={FullStar}
        alt="Full Star"
        style={{ width: "18px", height: "18px" }}
      />
    );
  }

  if (halfStar) {
    stars.push(
      <img
        key="half"
        src={HalfStar}
        alt="Half Star"
        style={{ width: "18px", height: "18px" }}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <img
        key={`empty-${i}`}
        src={EmptyStar}
        alt="Empty Star"
        style={{ width: "18px", height: "18px" }}
      />
    );
  }

  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
}

export default StarRating;
