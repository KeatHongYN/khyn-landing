import Head from "next/head";
import React from "react";
import { TitleProps } from "./types";

const Title = ({
    title = "Keat Hong Youth Network"
}: TitleProps): JSX.Element => (
    <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
    </Head>
);

export default Title;
