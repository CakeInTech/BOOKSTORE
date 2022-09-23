import { Routes, Route } from 'react-router-dom';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import Nav from './components/Header/Header';

const App = () => (
  <div className="App">
    <Nav />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
