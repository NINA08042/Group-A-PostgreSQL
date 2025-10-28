<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Group A：CW01 — PostgreSQL</title>
  </head>
  <body>
 <h1>Welcome to Group A: CW01 -- PostgreSQL</h1>
    <h2>Click the tab to start!</h2>
  </body>
</html>


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
