import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Book.module.css';
import { removeBook } from '../../src/redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();

  const { details } = props;
  return (
    <div>

      {details.map((book) => (
        <div className={styles.Bookcontainer} key={book.id}>
          <span>{book.title}</span>
          <span />
          <span>{book.author}</span>
          <span />
          <span><button value="remove" type="button" onClick={() => dispatch(removeBook(book.id))}>Remove Book</button></span>

        </div>
      ))}
    </div>
  );
};

Books.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    map: PropTypes.objectOf(PropTypes.string),
  }).isRequired).isRequired,
};

export default Books;
