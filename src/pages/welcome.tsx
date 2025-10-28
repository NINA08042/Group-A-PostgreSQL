import React from "react";

export default function Welcome() {
  return (
    <div className="page markdown-body" style={{ textAlign: "center" }}>
      <h1>Welcome to Group A PostgreSQL 🎓</h1>
      <p>
        Explore PostgreSQL basics, setup tutorials, and code explanations with Group A 🚀
      </p>


      <a
        href="https://github.com/NINA08042/Group-A-PostgreSQL"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 22px",
          marginTop: "20px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      >
        View GitHub Repository
      </a>
    </div>
  );
}
