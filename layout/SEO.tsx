import Head from "next/head";
import React from "react";
import { PROD_HOST } from "../config/constants";
import { SEOProps } from "./types";

const SEO = ({
    title = "Keat Hong Youth Network",
    openGraph = {
        ogTitle: "Official Keat Hong Youth Network Website",
        ogDescription:
            "We empower youths to make a difference in the community.",
        ogImage: `${PROD_HOST}/assets/img/test-1.png`,
        ogUrl: PROD_HOST
    }
}: SEOProps): JSX.Element => (
    <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta property="og:title" content={openGraph.ogTitle} />
        <meta property="og:description" content={openGraph.ogDescription} />
        <meta property="og:image" content={openGraph.ogImage} />
        <meta property="og:url" content={openGraph.ogUrl} />
        <meta name="twitter:card" content="summary" />
    </Head>
);

export default SEO;
