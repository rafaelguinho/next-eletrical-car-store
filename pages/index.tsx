import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>My news</h1>

      <ul>
        <li>
          <Link href="news/notícia 1">Notícia 1</Link>
        </li>
        <li>
          <Link href="news/notícia 2">Notícia 2</Link>
        </li>

        <li>
          <Link href="news/sports/notícia 3">Notícia 3</Link>
        </li>
      </ul>

      <br />
      <br />

      <br />

      <button
        onClick={() => {
          router.push("news/notícia 1");
        }}
      >
        Navegar via código
      </button>
    </main>
  );
}
