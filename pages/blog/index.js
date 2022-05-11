import React from "react";
import Link from "next/link";

import styles from "../../styles/Blog.module.scss";

import { v4 as uuidv4 } from "uuid";

const index = ({ articles }) => {
  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>Bienvenue sur le Blog.</h1>

      <p className={styles.subtitle}>Voici les articles</p>

      <ul className={styles.list}>
        {articles.map((article) => (
          <li key={uuidv4()} className={styles.card}>
            <h2 className={styles.card_title}>{article.title}</h2>

            <p className={styles.card_description}>{article.description}</p>

            <Link href={`/blog/${article.id}`}>
              <a>Lire cet article</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();
  return {
    props: {
      articles,
    },
  };
}
