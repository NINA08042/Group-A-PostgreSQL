


import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import homeMd from "../assets/home.md?raw";

export default function Home() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(homeMd);
  }, []);

  return (
    <div className="page markdown-body">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
}
