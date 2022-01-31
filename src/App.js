import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext";

function App(){
  return( 
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/'element={<ItemListContainer/> } />
            <Route path='/tipos/:tipos'element={<ItemListContainer/>}/>
            <Route path='/item/:id'element={<ItemDetailContainer/>}/>
            <Route path='/Cart'element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
