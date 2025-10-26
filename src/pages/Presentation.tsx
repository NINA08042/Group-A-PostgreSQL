import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// ✅ 直接导入 markdown 文件
import presentationContent from "../assets/postgresql-presentation.md?raw";

export default function Presentation() {
  const [content, setContent] = useState("");

  useEffect(() => {
    // 因为通过 ?raw 导入的是纯文本字符串
    setContent(presentationContent);
  }, []);

  return (
    <div className="container mx-auto p-8 prose prose-slate max-w-4xl">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
}
