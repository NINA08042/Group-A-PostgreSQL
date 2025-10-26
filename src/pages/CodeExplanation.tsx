import React from "react";

export default function CodeExplanation() {
  return (
    <div className="page">
      <h1>💻 Code Explanation</h1>
      <p>
        Here we explain key parts of our PostgreSQL project:
      </p>
      <h2>1. Database Schema</h2>
      <pre>{`CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  major VARCHAR(50),
  gpa NUMERIC(3,2)
);`}</pre>

      <h2>2. Query Example</h2>
      <pre>{`SELECT name, gpa FROM students WHERE gpa > 3.5;`}</pre>

      <p>These examples show basic SQL structure in our PostgreSQL system.</p>
    </div>
  );
}
