import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// 让 Markdown 能识别 <video> 标签
import rehypeRaw from "rehype-raw";

export default function Presentation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    // 推荐使用 public 文件夹路径，最稳妥
    fetch("postgresql-presentation.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="page markdown-body">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
}
