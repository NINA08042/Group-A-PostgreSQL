import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function CodeExplanation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const mdPath = `${import.meta.env.BASE_URL}src/assets/code-explanation.md`;

    fetch(mdPath)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("# Failed to load code explanation 😢"));
  }, []);

  return (
    <div className="page markdown-body">
      <h1>💻 PostgreSQL Code Explanation</h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          video: ({ node, ...props }) => (
            <video
              {...props}
              controls
              style={{
                width: "100%",
                maxWidth: "800px",
                borderRadius: "12px",
                margin: "20px auto",
                display: "block",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
              }}
            />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
