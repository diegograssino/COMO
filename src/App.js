import './css/bootstrap2.min.css'; // Bootstrap CSS
import './css/index.css';
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Route } from 'react-router-dom';
import CartContext from './contexts/CartContext';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <MyNavbar />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/productos/:id" component={ItemListContainer} exact />
        <Route path="/item/:id" component={ItemDetailContainer} exact />
        <Route path="/productos" component={ItemListContainer} exact />
        <Route path="/category/:id" component={ItemListContainer} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/cart" component={Cart} exact />
      </BrowserRouter>
      <Footer />
    </CartContext>
  );
}

export default App;
