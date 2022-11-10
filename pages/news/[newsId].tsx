import Head from "next/head";
import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  return (
    <div>
      <Head>
        <title>The detail page {newsId}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>The detail page {newsId}</h1>
      </main>

      <footer>
        <a
          href="https://github.com/rafaelguinho"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Guinho
        </a>
      </footer>
    </div>
  );
}