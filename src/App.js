import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Listarticles from './components/articlesRedux/Listearticles';
import Listscategories from './components/scategoriesRedux/ListeScategories';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import Navscroll from './components/Navscroll';
function App() {
  return (
    <Router>
     <Navscroll/>
      <Routes>
      <Route path='/articles' element={<Listarticles/>}/>
      <Route path='/admin' element={<ProductsAppAdmin/>}/>
      <Route path='/scategories' element={<Listscategories/>}/>
     
      </Routes>

    </Router>
  );
}

export default App;
