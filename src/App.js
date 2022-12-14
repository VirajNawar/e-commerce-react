
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProductDetail from './Pages/ProductDetail';
import Products from './Pages/Products';
import Nav from './Components/Nav';
import Cart from './Components/Cart'


function App() {
  return (
    <div className= "container mx-auto" >
      <Nav />
        <Navbar/>
      <Routes>
          <Route path='/' exact element={<Products/>}></Route>
          <Route path='/:category_id'  element={<Products/>}></Route>
          <Route path='/product/:product_id' element={<ProductDetail/>}></Route>  
          <Route path='/Cart'></Route>        
      </Routes>
      
    </div>
  );
}

export default App;
