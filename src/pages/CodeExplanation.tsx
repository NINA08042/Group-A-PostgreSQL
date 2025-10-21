export default function CodeExplanation() {
  return (
    <div className="page">
      <h1>PostgreSQL Code Examples</h1>

      <h2>Python Connection Example</h2>
      <pre><code className="language-python">
{`import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="testdb",
    user="postgres",
    password="yourpassword"
)
cur = conn.cursor()
cur.execute("SELECT * FROM users;")
print(cur.fetchall())
conn.close()`}
      </code></pre>

      <h2>SQL CRUD Example</h2>
      <pre><code className="language-sql">
{`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (username, email)
VALUES ('Alice', 'alice@example.com');

SELECT * FROM users;`}
      </code></pre>
    </div>
  );
}
