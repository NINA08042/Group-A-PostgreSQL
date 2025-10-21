import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Presentation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}src/assets/postgresql-presentation.md`)
      .then(res => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="page markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
