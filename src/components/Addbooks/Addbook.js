import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Addbook.module.css';
import { addBook } from '../../src/redux/books/books';

// const AddBook = () => (

// );

const AddBook = () => {
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(e.target.title.value, e.target.author.value));
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <p className={styles.miniheader}>Add New Book</p>
      <form className={styles.formContainer} onSubmit={inputHandler}>
        <input type="text" placeholder="Enter title of the book" id="title" className={styles.input} />
        <input type="text" placeholder="Enter author name" id="author" className={styles.input} />
        <button type="submit" value="Add" label="Add" className={styles.addbutton}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
