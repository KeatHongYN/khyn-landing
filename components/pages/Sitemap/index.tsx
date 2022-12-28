import Link from "next/link";
import React from "react";
import MainLayout from "../../../layout/MainLayout";

const Sitemap = (): JSX.Element => (
    <MainLayout title="Sitemap - Keat Hong Youth Network" maxBodyWidth>
        <div className="c-Sitemap">
            <div className="c-Sitemap__Top">
                <h1>Sitemap</h1>
            </div>
            <div className="c-Sitemap__Map">
                <Link href="/">Home</Link>
                <Link href="/about-us">About us</Link>
                <Link href="/events">Events</Link>
                <Link href="/join-us">Join us</Link>
                <Link href="/release-notes">Release notes</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/sitemap">Sitemap</Link>
            </div>
        </div>
    </MainLayout>
);

export default Sitemap;
