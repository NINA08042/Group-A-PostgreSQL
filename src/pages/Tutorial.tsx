import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function Tutorial() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const mdPath = `${import.meta.env.BASE_URL}src/assets/tutorial.md`;

    fetch(mdPath)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("# Failed to load tutorial 😢"));
  }, []);

  return (
    <div className="page markdown-body">
      <h1>🧩 PostgreSQL + DBeaver Setup Tutorial</h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ node, ...props }) => (
            <figure style={{ textAlign: "center", margin: "30px 0" }}>
              <img
                {...props}
                style={{
                  maxWidth: "90%",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
                }}
              />
              {props.alt && (
                <figcaption
                  style={{
                    fontSize: "0.95rem",
                    color: "#555",
                    marginTop: "8px",
                    fontStyle: "italic"
                  }}
                >
                  {props.alt}
                </figcaption>
              )}
            </figure>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
