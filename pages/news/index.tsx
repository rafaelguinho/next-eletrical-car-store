import Head from "next/head";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <Head>
        <title>News page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>News page</h1>

        <ul>
          <li>
            <Link href="/news/nextjs-is-great">NextJS is great</Link>
          </li>
          <li>
            <Link href="/news/something-else">Something else</Link>
          </li>
        </ul>
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
