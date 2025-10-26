import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import presentationMd from "../assets/postgresql-presentation.md?raw";

export default function Presentation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(presentationMd);
  }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-10 prose dark:prose-invert lg:prose-lg">
        <ReactMarkdown
          children={content.replaceAll(
            "/Group-A-PostgreSQL/",
            `${base}`
          )}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ ...props }) => (
              <img
                {...props}
                className="rounded-xl shadow-md mx-auto my-6 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ),
            video: ({ ...props }) => (
              <video
                {...props}
                className="rounded-xl shadow-lg mx-auto my-6 w-full max-w-3xl"
                controls
              />
            ),
          }}
        />
      </div>
    </div>
  );
}
