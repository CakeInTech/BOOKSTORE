import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../src/redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => (state.categories));
  const dispatch = useDispatch();
  return (
    <div className="category">
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
