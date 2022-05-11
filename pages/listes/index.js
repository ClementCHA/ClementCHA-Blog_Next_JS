import React from "react";
import Link from "next/link";
import styles from "../../styles/Listes.module.scss";
import { v4 as uuidv4 } from "uuid";

const index = ({ users }) => {
  return (
    <div className={styles.list}>
      <h1 className={styles.title}> La listes des utilisateurs </h1>
      <ul>
        {users.map((user) => (
          <li className={styles.card} key={uuidv4()}>
            <p className={styles.card_username}>{user.username}</p>
            <Link href={`/listes/${user.id}`}>
              <a>Contacter</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await data.json();
  return {
    props: { users },
  };
}
