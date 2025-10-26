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
    <div className="page markdown-body">
      <h1>📊 PostgreSQL Presentation</h1>
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
