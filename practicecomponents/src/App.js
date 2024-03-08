import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';
import Singlrproductpage from './SingleProductPage';
import Navbar from './components/Navbar';
import Login from './Loginpage';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';
import Track from "./components/Livetrack" 
import ProductPage from './SingleProductPage';
import CustomerReview from './components/Review';

function App() {


  return (
    <> 
     <Navbar/> 
     <Track/>
     <ProductPage/> 
     <CustomerReview/>
    </>
  );
}

export default App;
