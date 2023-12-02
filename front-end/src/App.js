
import './App.css';
import { Routes,Route, Link} from "react-router-dom";
import Home from './pages/home';
import Product from './components/products/product';
import Single from './components/singleProduct/single';
import data from "./components/data/data.json";
import { useEffect, useState } from 'react';
import Heading from './components/heading/heading';
import Fooder from './components/fooder/fooder';
import Login from './components/Account/login';
import Signup from './components/Account/signup';
import Cart from './components/cart/cart';
import { cartContext } from './providers/cartcontext';
import axios from 'axios';



function App() {
  const [single,setSingle]= useState();
  const [user,setUser]=useState(true);
  const [products,setProducts]=useState("dals");
  const [cartProduct,setCartProduct] = useState([]);
  const [catagory,setCatagory]=useState([]);
  
/*useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://script.google.com/macros/s/AKfycbwYmoyNZwuv4lZzFf8EryVU_HH7R4tiwk3aEgJTc_mq8qD_LlxvBXl5-R5YXdte1AoFnw/exec');
      const productData = response.data;
      console.log("mmmm",productData)
      setCatagory(productData);
    } catch (error) {
      console.error("eee",error);
    }
    console.log(data)
  };

  fetchProducts();
}, []);*/

  return (
    <div className="App">          
      <cartContext.Provider value={{ cartProduct, setCartProduct,setUser,user}}>
      <Heading/> 
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login'  element={<Login setUser={setUser}/>}/>
        <Route exact path='/' element={<Home catagory={catagory} setSingle={setSingle} data={data} products={products} setProducts={setProducts}/>}/>
        <Route path='product/' element={<Product data={data} products={products} setProducts={setProducts} setSingle={setSingle}/>}/>      
        <Route path='product/single/' element={<Single  setSingle={setSingle} data={data}  single={single} products={products}/>}/>            
        {user?<Route path="/cart"  element={<Cart/>}/>:<Route path='/signup' element={<Signup/>}/>}
        <Route path='*' element={<Cart/>}/>
      </Routes>
      </cartContext.Provider> 
      <Fooder/>      
    </div>
  );
}

export default App;
