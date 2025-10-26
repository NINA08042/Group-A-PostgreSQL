import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function Presentation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}postgresql-presentation.md`)
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => console.error("Failed to load markdown:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-100">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: (props) => (
            <img
              {...props}
              className="rounded-xl shadow-md mx-auto my-4"
              loading="lazy"
            />
          ),
          video: (props) => (
            <video
              {...props}
              controls
              className="rounded-xl shadow-lg mx-auto my-4"
            />
          ),
        }}
      />
    </div>
  );
}
