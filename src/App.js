import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ClassComponent } from './components/class-component/ClassComponent';
import FuntionalComponent from './components/function-component/FuntionalComponent';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import NavBar from "./components/navbar/NavBar";
import CartIcon from './icon/CartIcon';

const age = 18;

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hola, inicio de nuestro e-commerce en ReactJS</h1>
      <hr/>
      <ClassComponent age={age} name="Rodolfo"/>
      <hr/>
      <FuntionalComponent age={age} name="Mateo"/>
      <CartIcon />
      <hr/>
      <ItemListContainer />
    </div>
  );
}

export default App;
