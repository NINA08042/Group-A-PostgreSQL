import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="wrap">
      <nav className="navbar">
        <h1>Group A — PostgreSQL</h1>
        <ul>
          <li><Link to="/presentation">Presentation</Link></li>
          <li><Link to="/tutorial">Tutorial</Link></li>
          <li><Link to="/code">Code Explanation</Link></li>
        </ul>
      </nav>

      <main className="home">
        <h2>Welcome</h2>
        <p>
          This site showcases our PostgreSQL presentation, tutorial guide, and code explanation
          with rich media (images & videos) rendered from Markdown files.
        </p>
        <div className="quick-links">
          <Link to="/presentation" className="btn">Go to Presentation</Link>
          <Link to="/tutorial" className="btn">Open Tutorial</Link>
          <Link to="/code" className="btn">View Code Explanation</Link>
        </div>
      </main>

      <footer>© 2025 Group A</footer>
    </div>
  );
}
