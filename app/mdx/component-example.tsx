"use client";

import React from "react";

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    values: [12, 19, 3, 5, 2, 3],
  };

  const total = data.values.reduce((acc, value) => acc + value, 0);

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: "300px",
        height: "300px",
        position: "relative",
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <svg viewBox="0 0 32 32" style={{ width: "100%", height: "100%" }}>
        {data.values.map((value, index) => {
          const startAngle =
            (data.values.slice(0, index).reduce((acc, val) => acc + val, 0) /
              total) *
            2 *
            Math.PI;
          const endAngle =
            (data.values
              .slice(0, index + 1)
              .reduce((acc, val) => acc + val, 0) /
              total) *
            2 *
            Math.PI;
          const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

          const startX = 16 + 16 * Math.cos(startAngle);
          const startY = 16 + 16 * Math.sin(startAngle);
          const endX = 16 + 16 * Math.cos(endAngle);
          const endY = 16 + 16 * Math.sin(endAngle);

          const pathData = `M 16 16 L ${startX} ${startY} A 16 16 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

          return (
            <path
              key={index}
              d={pathData}
              fill={`hsl(${(index / data.values.length) * 360}, 100%, 50%)`}
              style={{ transition: "fill 0.3s" }}
              onMouseEnter={(e) =>
                e.currentTarget.setAttribute("fill", "lightgray")
              }
              onMouseLeave={(e) =>
                e.currentTarget.setAttribute(
                  "fill",
                  `hsl(${(index / data.values.length) * 360}, 100%, 50%)`
                )
              }
            />
          );
        })}
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          fontSize: "1.2em",
          color: "#333",
        }}
      >
        Pie Chart
      </div>
    </div>
  );
};

export default PieChart;
