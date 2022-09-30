import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
// import { fetchBooks } from './src/redux/books/books';
import store from './src/redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store.dispatch(fetchBooks());

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);
