import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import tutorialMd from "../assets/tutorial.md?raw";

export default function Tutorial() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(tutorialMd);
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-50 via-indigo-50 to-purple-50 
      dark:from-slate-900 dark:via-gray-900 dark:to-indigo-950 p-8 transition-colors duration-500">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/90 shadow-xl rounded-2xl p-10 prose dark:prose-invert">
        <ReactMarkdown
          children={content.replaceAll(
            "/Group-A-PostgreSQL/",
            `${base}`
          )}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: (props) => (
              <img
                {...props}
                className="rounded-lg shadow-md mx-auto my-4 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ),
          }}
        />
      </div>
    </div>
  );
}
