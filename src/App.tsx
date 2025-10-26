import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold mb-8 mt-10">Group A - PostgreSQL</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Explore database concepts, tutorials, and code demonstrations
        </p>
        <a
          href="/Group-A-PostgreSQL/presentation"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Start Learning →
        </a>
      </div>
    </div>
  );
}
