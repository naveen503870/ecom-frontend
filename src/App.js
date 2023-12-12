import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

function App() {
  return (
    <>
<BrowserRouter>
    {/* <Header/>
     */}
     
    <Route path="/"><Register /></Route>
    <Route path="/login" element={<Login/>}><Login /></Route>
    <Route path ="/update/:id" element={<UpdateProduct/>}><UpdateProduct /></Route>
    <Route path="/add" element={<AddProduct/>}><AddProduct /></Route>
    <Route path="/products" element={<ProductList/>}><ProductList /></Route>

</BrowserRouter>
    </>
  );
}

export default App;
