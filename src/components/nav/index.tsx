import React from "react";
import Link from "next/link";

import styles from "./nav.module.css";

const Nav = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.title}>
          <h1>💾 website</h1>
        </a>
      </Link>

      <ul className={styles.menu}>
        <li>
          <Link href="#">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
