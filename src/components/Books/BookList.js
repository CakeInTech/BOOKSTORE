import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import AddBook from '../Addbooks/Addbook';
import Books from './Books';
import styles from './Book.module.css';
import { getAllBooks } from '../../src/redux/books/books';

const BookLists = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <div className={styles.container}>
      <h1>Book List</h1>
      <div className={styles.list}>
        <Books books={books} />
      </div>
      <AddBook />
    </div>
  );
};

export default BookLists;
