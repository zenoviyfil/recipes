import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "120px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <h3 style={{ margin: "10px 0 5px", fontSize: "16px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>{description}</p>
    </div>
  );
};
