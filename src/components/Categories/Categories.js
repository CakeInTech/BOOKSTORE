import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../src/redux/categories/categories';
import styles from './category.module.css';

const Categories = () => {
  const status = useSelector((state) => (state.categories));
  const dispatch = useDispatch();
  return (
    <div className={styles.category}>
      <p>
        {status}
      </p>

      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
