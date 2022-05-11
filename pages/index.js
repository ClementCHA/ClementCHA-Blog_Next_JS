import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}> Bienvenue sur Code.io</h1>{" "}
        <p style={{ fontSize: "13px" }}>
          Le blog communautaire des afficionados de développement web.{" "}
        </p>
      </header>
      <main className={styles.box}>
        <section className={styles.card}>
          <h2 className={styles.card_title}> Lisez les articles</h2>
          <p className={styles.card_description}>Maximisez votre culture web</p>
          <p className={styles.card_content}>
            Chaque auteur tente de vous apporter le plus de valeur possible par
            article.
          </p>
          <Link href="/blog">
            <a>Visite le blog</a>
          </Link>
        </section>
        <section className={styles.card}>
          <h2 className={styles.card_title}>
            Faites un tour vers la liste des membres
          </h2>
          <p className={styles.card_description}>Faites-vous des amis</p>
          <p className={styles.card_content}>
            Ajouter, invitez et discutez avec les différents membres.
          </p>
          <Link href="/listes">
            <a>Découvre la liste de membres</a>
          </Link>
        </section>
        <div></div>
      </main>
    </div>
  );
}
