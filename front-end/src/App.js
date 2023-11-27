
import './App.css';
import { Routes,Route} from "react-router-dom";
import Home from './pages/home';
import Product from './components/products/product';
import Single from './components/singleProduct/single';
import data from "./components/data/data.json";
import { useState } from 'react';
import Heading from './components/heading/heading';
import Fooder from './components/fooder/fooder';
import Login from './components/Account/login';
import Signup from './components/Account/signup';
import Cart from './components/cart/cart';
import { cartContext } from './providers/cartcontext';



function App() {
  const [single,setSingle]= useState();
  const [user,setUser]=useState(true);
  const [products,setProducts]=useState("snacks");
  const [cartProduct,setCartProduct] = useState([]);
  const [catagory,setCatagory]=useState(
    [
        {   
            id:1,
            pic:"food1/Sweets_Snacks_2.png",
            name:"Sweets & Snacks",
            value:"snacks"
        },
        {
            id:2,
            pic:"food1/Masala_3.png",
            name:"Masala",
            value:"masala"
        },
        {
            id:3,
            pic:"food1/Pickle_3.png",
            name:"Pickles",
            value:"pickles"
        },
        {
            id:4,
            pic:"food1/pooja_items.png",
            name:"Pooja Items",
        },
        {
            id:5,
            pic:"food1/kitchen.png",
            name:"Kitchen Accessory",
            value:"kitchen"
        }
    ]
)


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
      </Routes>
      </cartContext.Provider> 
      <Fooder/>      
    </div>
  );
}

export default App;
