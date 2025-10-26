import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function CodeExplanation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/Group-A-PostgreSQL/assets/code-explanation.md")
      .then(r => r.text())
      .then(setContent)
      .catch(() => setContent("# Failed to load code explanation"));
  }, []);

  return (
    <div className="page">
      <h1>💻 Code Explanation</h1>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
