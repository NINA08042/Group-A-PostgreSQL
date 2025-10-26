import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Presentation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/Group-A-PostgreSQL/assets/postgresql-presentation.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
