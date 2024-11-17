import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  username: string;
}

export const Header: React.FC<HeaderProps> = ({ username }) => {
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "#FFF",
      }}
    >
      <h1 style={{ margin: "0px", cursor: 'default' }}>{"Recipe App"}</h1>
      <button
        style={{
          background: "#FFF",
          color: "#4CAF50",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/profile")}
      >
        {username}
      </button>
    </header>
  );
};
