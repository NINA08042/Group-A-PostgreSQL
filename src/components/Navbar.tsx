import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>PostgreSQL Learning Hub</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/presentation">Presentation</Link></li>
        <li><Link to="/tutorial">Tutorial</Link></li>
        <li><Link to="/code">Code Explanation</Link></li>
      </ul>
    </nav>
  );
}
