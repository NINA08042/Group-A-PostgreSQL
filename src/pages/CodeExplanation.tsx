import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import codeExplanationMd from "../assets/code-explanation.md?raw";

export default function CodeExplanation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(codeExplanationMd);
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <div className="page markdown-body">
      <h1>PostgreSQL Code Explanation</h1>
      <ReactMarkdown
        children={content.replaceAll("/Group-A-PostgreSQL/", `${base}`)}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: (props) => (
            <img
              {...props}
              className="mx-auto my-6 rounded-xl shadow-md max-w-full"
              loading="lazy"
            />
          ),
          video: (props) => (
            <video
              {...props}
              className="mx-auto my-6 rounded-xl shadow-md w-full max-w-3xl"
              controls
            />
          ),
        }}
      />
    </div>
  );
}
