import './styles/App.css';
import Routes from './routes/Routes';
import { CartProvider } from './context/CartContext';


export default function App() {
  
  return (
    <CartProvider>
    <Routes/>
    </CartProvider>
  );
}
