import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App(){
  return( 
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/'element={<ItemListContainer/> } />
          <Route path='/item/:id'element={<ItemDetailContainer/>}/>
          <Route path='/tipos/:id'element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
