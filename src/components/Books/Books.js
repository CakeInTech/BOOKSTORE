/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Book.module.css';
import { removeBook } from '../../src/redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();

  const { books } = props;
  return (
    <div>

      {books.map((book) => (
        <div className={styles.Bookcontainer} key={book.id}>
          <div className={styles.details}>
            <h3>Category</h3>
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <ul>
              <li>Comments</li>
              <li>
                <button type="button" value="remove" onClick={() => dispatch(removeBook(book.id))}>Remove Book</button>
              </li>
              <li>
                Edit
              </li>
            </ul>
          </div>
          <div className={styles.percentage}>
            <div className={styles.spinner} />
            <div>
              <h2>
                {Math.floor(Math.random() * 100)}
                %
              </h2>
              <p>Completed</p>
            </div>
          </div>
          <div className={styles.chapters}>
            <h3>Current Chapter</h3>
            <h4>
              Chapter
              {Math.floor(Math.random() * 10)}
            </h4>
            <button type="button">Update Chapter</button>
          </div>

        </div>
      ))}
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    map: PropTypes.objectOf(PropTypes.string),
  }).isRequired).isRequired,
};

export default Books;
