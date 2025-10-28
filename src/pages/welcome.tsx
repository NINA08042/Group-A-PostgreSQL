import { Link } from "react-router-dom";
import "../index.css";

export default function Welcome() {
  return (
    <div className="page markdown-body" style={{ textAlign: "center" }}>
      <h1>Welcome to Group A: CW01 -- PostgreSQL</h1>

      <p>
      
      </p>

      <Link
        to="/home"
        style={{
          padding: "12px 24px",
          background: "#0078ff",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1rem",
          marginTop: "24px",
          display: "inline-block",
        }}
      >
        Start Learning ➜
      </Link>
    </div>
  );
}
