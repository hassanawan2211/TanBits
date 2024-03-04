import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';
import Singlrproductpage from './SingleProductPage';
import Navbar from './components/Navbar';
import Login from './Loginpage';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';

function App() {
  return (
    <>
    <Provider store={store}> 
     {/* <Filter/> */}
     {/* <Singlrproductpage/> */}
     {/* <Navbar/> */}
     {/* <Login/> */}
     <BookContainer/>
     </Provider>
    </>
  );
}

export default App;
