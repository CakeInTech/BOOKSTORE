import { useSelector } from 'react-redux/es/exports';
import AddBook from '../Addbooks/Addbook';
import Books from './Books';
import styles from './Book.module.css';

const BookLists = () => {
  const list = useSelector((state) => state.books);

  return (
    <div className={styles.container}>
      <h1>Book List</h1>
      <div className={styles.list}>
        <Books details={list} />
      </div>
      <AddBook />
    </div>
  );
};

export default BookLists;
