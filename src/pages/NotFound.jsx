import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "6rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem", color: "#666" }}>
        Oops! This page seems to have wandered off...
      </p>
      <Link 
        to="/" 
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "hsl(25, 70%, 45%)",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontWeight: 500
        }}
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
