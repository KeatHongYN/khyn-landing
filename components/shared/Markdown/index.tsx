import { CommonMarkdownProps } from "./types";

export const Heading = {
    H1: ({ children }: CommonMarkdownProps) => <h1 className = "c-Markdown c-Markdown--h1">{children}</h1>,
    H2: ({ children }: CommonMarkdownProps) => <h2 className = "c-Markdown c-Markdown--h2">{children}</h2>,
    H3: ({ children }: CommonMarkdownProps) => <h3 className = "c-Markdown c-Markdown--h3">{children}</h3>,
    H4: ({ children }: CommonMarkdownProps) => <h4 className = "c-Markdown c-Markdown--h4">{children}</h4>,
    H5: ({ children }: CommonMarkdownProps) => <h5 className = "c-Markdown c-Markdown--h5">{children}</h5>,
    H6: ({ children }: CommonMarkdownProps) => <h6 className = "c-Markdown c-Markdown--h6">{children}</h6>
};

export const Paragraph = ({ children }: CommonMarkdownProps) => <p className = "c-Markdown c-Markdown--p">{children}</p>
export const List = ({ children }: CommonMarkdownProps) => <li className="c-Markdown c-Markdown--li">{children}</li>
export const HR = ({ children }: CommonMarkdownProps) => <hr className="c-Markdown c-Markdown--hr">{children}</hr>