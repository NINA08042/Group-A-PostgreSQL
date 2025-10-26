import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("dark-mode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [darkMode, mounted]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/presentation", label: "Presentation" },
    { to: "/tutorial", label: "Tutorial" },
    { to: "/code", label: "Code Explanation" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 dark:bg-gray-900/70 border-b border-gray-300 dark:border-gray-700 shadow-sm transition-all duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Group A - PostgreSQL
        </h1>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-2 py-1 transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full animate-slidein"></span>
              )}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform"
            title="Toggle dark mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
