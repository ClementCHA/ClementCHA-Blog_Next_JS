import Link from "next/link";

import styles from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/listes">
        <a>Listes</a>
      </Link>
    </nav>
  );
};

export default NavBar;
