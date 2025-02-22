'use client'

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const STATEMENTS = [
  {language: 'ruby', code: 'puts "Hello World!"'},
  {language: 'python', code: 'print("Hello World!")'},
  {language: 'go', code: 'fmt.Println("Hello World!")'},
  {language: 'csharp', code: 'Console.WriteLine("Hello World!");'},
  {language: 'javascript', code: 'console.log("Hello World!");'}
]

export function HelloWorld() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [statementIndex, setStatementIndex] = useState(0);
  const code = STATEMENTS[statementIndex].code;
  const language = STATEMENTS[statementIndex].language;

  useEffect(() => {
    if (!isDeleting && index < code.length) {
      // Typing phase
      const timeout = setTimeout(() => {
        setText((prev) => prev + code[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === code.length) {
      // Wait 3 seconds before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      // Deleting phase
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      // Move to next statement and reset
      setIsDeleting(false);
      setStatementIndex((prev) => (prev + 1) % STATEMENTS.length);
    }
  }, [index, isDeleting, statementIndex, code]);

  return (
    <div className="flex flex-col gap-0">
      <div className="bg-[#2E3440] px-2 py-1 text-sm w-fit rounded-t-[0.3em] font-mono">{language}</div>
      <SyntaxHighlighter language={language} style={nord} showLineNumbers customStyle={{borderTopLeftRadius: 0, marginTop: 0}}>
        {text || "\u00A0"}
      </SyntaxHighlighter>
    </div>
  )
}
