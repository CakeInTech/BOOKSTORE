import React, { useState } from 'react';
import AddBook from '../Addbooks/Addbook';
import styles from './Book.module.css';

const Books = () => {
  const [books, setBooks] = useState({
    id: 1,
    title: 'This is my book',
    author: 'Written by me',
  });

  const getBooks = () => {
    setBooks({ id: 1, title: 'This is my book', author: 'Written by me' });
  };

  const { id, title, author } = books;
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className={styles.Bookcontainer} onLoad={getBooks}>
      <div className={styles.BookList}>
        <ul className={styles.BookItem}>
          <li>
            <span>{id}</span>
            <span> </span>
            <span>{title}</span>
            <span> </span>
            <span>{author}</span>
          </li>
        </ul>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
