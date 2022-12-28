import { GetServerSidePropsContext } from "next";

const generateSitemap = () => `
    <xml version="1.0" encoding="UTF-8">
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.keathongyouths.sg/</loc>
      </url>
      <url>
        <loc>https://www.keathongyouths.sg/about-us/</loc>
      </url>
      <url>
        <loc>https://www.keathongyouths.sg/events/</loc>
      </url>
      <url>
        <loc>https://www.keathongyouths.sg/join-us/</loc>
      </url>
      <url>
        <loc>https://www.keathongyouths.sg/release-notes/</loc>
      </url>
      <url>
        <loc>https://www.keathongyouths.sg/blog/</loc>
      </url>
      <url>
        <loc>https://www.keathongyouths.sg/sitemap/</loc>
      </url>
    </urlset>
    </xml>
    `;

const Sitemap = () => {};

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
    const sitemap = generateSitemap();
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}

export default Sitemap;
