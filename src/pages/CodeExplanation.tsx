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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-100 
      dark:from-slate-900 dark:via-gray-900 dark:to-blue-950 text-gray-800 dark:text-gray-100 
      transition-colors duration-500 p-8">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/90 shadow-2xl rounded-2xl p-10 prose dark:prose-invert">
        <ReactMarkdown
          children={content.replaceAll(
            "/Group-A-PostgreSQL/",
            `${base}`
          )}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            video: (props) => (
              <video
                {...props}
                className="rounded-xl shadow-lg mx-auto my-6 w-full max-w-3xl"
                controls
              />
            ),
            img: (props) => (
              <img
                {...props}
                className="rounded-xl shadow-md mx-auto my-6 hover:scale-105 transition-transform duration-300"
              />
            ),
          }}
        />
      </div>
    </div>
  );
}
