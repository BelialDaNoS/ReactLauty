import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App(){

  const remera={
      title: "Remera Piola se ese ese",
      stock : 10}
      
  const tazyanne={
      title:"tazyanne",
      stock: 1};  


  return( 
    <div className="App">
      <NavBar/>
      <ItemListContainer remera={remera} tazyanne={tazyanne} />
    </div>
  );
}

export default App;
