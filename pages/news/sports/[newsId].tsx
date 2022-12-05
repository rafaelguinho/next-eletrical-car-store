import { useRouter } from "next/router";
import React from "react";

const Noticia3 = () => {
  const router = useRouter();
  const { newsId } = router.query;

  return <h1>{newsId}</h1>;
};

export default Noticia3;
