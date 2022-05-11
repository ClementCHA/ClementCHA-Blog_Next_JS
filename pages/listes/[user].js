import React from "react";
import styles from "../../styles/User.module.scss";

const user = ({ user }) => {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.card_name}> {user.name} </h1>
        <p className={styles.card_username}> Username : {user.username}</p>
        <ul className={styles.card_list}>
          <li> Username : {user.username}</li>
          <li> Email : {user.email}</li>
          <li> Site Web : {user.website}</li>
          <li> Téléphone : {user.phone}</li>
        </ul>
      </section>
    </div>
  );
};

export async function getStaticProps(context) {
  //! we use context in props ONLY WHEN we have a "GetStaticPaths"
  const id = context.params.user;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();
  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  //! GetStaticPaths define all the road we want to create
  //! We're telling to next => All those road are gonna be dynamic
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await data.json();
  const paths = users.map((user) => ({
    params: { user: user.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
export default user;
