import './App.css';
import navIteam from './components/hamburger';
import Navbar from "../src/components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {


  return (
    <> 
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/cart' element ={<Cart/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
