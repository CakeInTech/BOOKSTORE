import React from 'react';
import styles from './Addbook.module.css';

const AddBook = () => (
  <div className={styles.container}>
    <p className={styles.miniheader}>Add New Book</p>
    <form className={styles.formContainer}>
      <input type="text" placeholder="Enter title of the book" id="title" className={styles.input} />
      <input type="text" placeholder="Enter author name" id="author" className={styles.input} />
      <input type="text" placeholder="Enter category" id="category" className={styles.input} />
      <button type="button" value="Add" label="Add" className={styles.addbutton}>Add Book</button>
    </form>
  </div>
);

export default AddBook;
