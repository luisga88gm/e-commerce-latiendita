import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer /> */}
      <h1>Otro componente</h1>
    </div>
  );
}

export default App;