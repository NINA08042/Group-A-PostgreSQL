export default function Tutorial() {
  return (
    <div className="page">
      <h1>PostgreSQL + DBeaver Setup Guide</h1>

      <h2>1️⃣ Install PostgreSQL</h2>
      <p>Download PostgreSQL from <a href="https://www.postgresql.org/download/" target="_blank">postgresql.org</a>.</p>

      <h2>2️⃣ Install DBeaver</h2>
      <p>Get DBeaver (GUI client) from <a href="https://dbeaver.io/download/" target="_blank">dbeaver.io</a>.</p>

      <h2>3️⃣ Connect DBeaver to PostgreSQL</h2>
      <ol>
        <li>Open DBeaver → Database → New Connection → PostgreSQL</li>
        <li>Enter Host, Port (5432), Username, Password</li>
        <li>Click <b>Test Connection</b> → <b>Finish</b></li>
      </ol>

      <h2>4️⃣ Verify Connection</h2>
      <p>Right-click on your database → “SQL Editor” → Run a query like:</p>
      <pre><code className="language-sql">SELECT version();</code></pre>
    </div>
  );
}
