/* eslint-disable no-unused-vars */
import "../styles/main.scss";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { useEffect } from "react";
import { getAnalytics } from "firebase/analytics";
import ErrorBoundary from "../components/pages/ErrorBoundary";
import { Heading, HR, List, Paragraph } from "../components/shared/Markdown";
import firebaseFn from "../utils/firebase";
import { ENVIRONMENT, ENVIRONMENT_ENUMS } from "../config/constants";

export default function App({ Component, pageProps }: AppProps) {
    const mdxComponents = {
        h1: Heading.H1,
        h2: Heading.H2,
        h3: Heading.H3,
        h4: Heading.H4,
        h5: Heading.H5,
        h6: Heading.H6,
        p: Paragraph,
        li: List,
        hr: HR
    };

    useEffect(() => {
        firebaseFn.logAnalytics("session_start");
    }, []);

    return (
        <ErrorBoundary>
            <MDXProvider components={mdxComponents}>
                <Component {...pageProps} />
            </MDXProvider>
        </ErrorBoundary>
    );
}
