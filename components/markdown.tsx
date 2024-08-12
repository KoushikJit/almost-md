import React from "react";
import markdownit from "markdown-it";
import DOMPurify from 'dompurify';

type Props = {
  text: string;
};

const md = markdownit({
});

const Markdown = ({ text }: Props) => {
  const htmlcontent = md.render(text);
  const sanitized = DOMPurify.sanitize(htmlcontent);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }}></div>;
};

export default Markdown;