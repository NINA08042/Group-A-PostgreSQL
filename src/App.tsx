import { Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h1>Group A - PostgreSQL Project</h1>
      <p>Welcome! Choose a page below to explore.</p>
      <div style={{ marginTop: "30px" }}>
        <Link to="/presentation" style={{ margin: "0 20px" }}>Presentation</Link>
        <Link to="/tutorial" style={{ margin: "0 20px" }}>Tutorial</Link>
        <Link to="/code" style={{ margin: "0 20px" }}>Code Explanation</Link>
      </div>
    </div>
  );
}
