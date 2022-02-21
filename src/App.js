import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ResizeComponent from "./components/resize-component/ResizeComponent";
import Routes from "./routes/Routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
      {/* <ResizeComponent /> */}
    </div>
  );
}

export default App;