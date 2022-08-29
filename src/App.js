import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductAdmin from './components/ProductAdmin';
import ProductDisplay from './components/ProductDisplay';

function App() {
  return (
    <Router>
      
    <Navbar/>
    <Routes>
    <Route path="/"  exact element={<Home />} />
        <Route path="/ProductDisplay" exact element={<ProductDisplay/>}/>
        <Route path="/ProductAdmin" exact element={<ProductAdmin/>}/>
        <Route path="/AddProduct" exact element={<AddProduct/>}/>
        <Route path="/EditProduct" exact element={<EditProduct/>}/>
        </Routes>
        </Router>
    
  );
}

export default App;
