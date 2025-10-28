<h1>Welcome to Group A PostgreSQL </h1>
      <p>
        Click the navigation bar above to start exploring different sections of
        our PostgreSQL learning journey 
      </p>


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


      <h1>Welcome to Group A PostgreSQL </h1>
      <p>
        Click the navigation bar above to start exploring different sections of
        our PostgreSQL learning journey 
      </p>
      <hr style={{ margin: "20px 0" }} />

  
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
}
