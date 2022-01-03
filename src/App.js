import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App(){

  const remera={
      title: "Remera Piola se ese ese",
      stock : 10}
      
  const tazyanne={
      title:"Tazyanne",
      stock: 1};  

  return( 
    <div className="App">
      <NavBar/>
      <ItemListContainer />
    </div>
  );
}

export default App;
