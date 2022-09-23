import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Nav = () => (
  <header className={styles.Header}>
    <h1 className={styles.Logo}>Bookstore CMS</h1>
    <nav className={styles.Navigation}>
      <ul className={styles.UnorderedList}>
        <Link to="/"><li className={styles.Link}>Books</li></Link>
        <Link to="/categories"><li className={styles.Link}>Categories</li></Link>
      </ul>
    </nav>
  </header>

);

export default Nav;
