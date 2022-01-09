import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App(){
  return( 
    <div className="App">
      <NavBar/>
      <ItemListContainer/> 

      {/* <BrowserRouter>
        <Routes>
          <Route path='/item'element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
