import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Presentation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/Group-A-PostgreSQL/assets/postgresql-presentation.md")
      .then(r => r.text())
      .then(setContent)
      .catch(() => setContent("# Failed to load presentation"));
  }, []);

  return (
    <div className="page">
      <h1>📊 PostgreSQL Presentation</h1>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
