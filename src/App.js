import "bootstrap/dist/css/bootstrap.min.css";
import contador from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import List from "./components/list";

function App(){
  return( 
    <List/>
    <Contador stock={5} initial={1}/>
    <NavBar/>
  );
}

export default App;
