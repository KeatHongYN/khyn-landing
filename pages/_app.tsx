/* eslint-disable no-unused-vars */
import "../styles/main.scss";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";
import ErrorBoundary from "../components/pages/ErrorBoundary";
import { Heading, HR, List, Paragraph } from "../components/shared/Markdown";
import firebaseFn from "../utils/firebase";

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

    const router = useRouter();

    useEffect(() => {
        firebaseFn.logAnalytics("session_start");

        NProgress.configure({ showSpinner: false });
        router.events.on("routeChangeStart", () => NProgress.start());
        router.events.on("routeChangeComplete", () => NProgress.done());
        router.events.on("routeChangeError", () => NProgress.done());
    }, []);

    return (
        <ErrorBoundary>
            <MDXProvider components={mdxComponents}>
                <Component {...pageProps} />
            </MDXProvider>
        </ErrorBoundary>
    );
}
