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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-gray-100 text-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          PostgreSQL Presentation
        </h1>
        <ReactMarkdown
          children={content.replaceAll("/Group-A-PostgreSQL/", `${base}`)}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: (props) => (
              <img
                {...props}
                className="mx-auto my-6 rounded-lg shadow-md max-w-full"
                loading="lazy"
              />
            ),
            video: (props) => (
              <video
                {...props}
                className="mx-auto my-6 rounded-lg shadow-md w-full max-w-3xl"
                controls
              />
            ),
          }}
        />
      </div>
    </div>
  );
}
