import React from "react";

import styles from "../../styles/Article.module.scss";

const article = ({ article }) => {
  console.log(article);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> {article.title}</h1>
      <p className={styles.text}> {article.body}</p>
    </div>
  );
};

export async function getStaticProps(context) {
  //! we use context in props ONLY WHEN we have a "GetStaticPaths"
  const id = context.params.article;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await data.json();
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  //! GetStaticPaths define all the road we want to create
  //! We're telling to next => All those road are gonna be dynamic
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await data.json();
  const paths = articles.map((article) => ({
    params: { article: article.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default article;
