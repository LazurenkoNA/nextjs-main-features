import { MDXProps } from "mdx/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function code({
  className,
  children,
  ...props
}: {
  className: string | undefined;
  children: string | string[];
}): JSX.Element {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    ((
      // eslint-disable-next-line react/no-children-prop
      <SyntaxHighlighter language={match[1]} PreTag="div" children={children} />
    ) as JSX.Element)
  ) : (
    // eslint-disable-next-line react/no-children-prop
    <code className={className} children={children} {...props} />
  );
}

export default function Markdown({
  markdown: MDXComponent,
}: {
  markdown: (props: MDXProps) => JSX.Element;
}) {
  return <MDXComponent components={{ code }} />;
}
