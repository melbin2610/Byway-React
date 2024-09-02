import React from "react";
import FullStar from "../../assets/icons/star.svg";
import EmptyStar from "../../assets/icons/EmptyStar.svg";

const StarPyramid = () => {
  const starPattern = [
    { stars: [true, true, true, true, true], percentage: "80%" },
    { stars: [true, true, true, true, false], percentage: "10%" },
    { stars: [true, true, true, false, false], percentage: "5%" },
    { stars: [true, true, false, false, false], percentage: "3%" },
    { stars: [true, false, false, false, false], percentage: "2%" },
  ];

  return (
    <div>
      {starPattern.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "5px 0",
          }}
        >
          <div style={{ display: "flex" }}>
            {row.stars.map((isFull, starIndex) => (
              <img
                key={starIndex}
                src={isFull ? FullStar : EmptyStar}
                alt={isFull ? "Full Star" : "Empty Star"}
                style={{ width: "18px", height: "18px", margin: "0 2px" }}
              />
            ))}
          </div>
          <span style={{ marginLeft: "10px", fontSize: "14px", color: "#333" }}>
            {row.percentage}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StarPyramid;
