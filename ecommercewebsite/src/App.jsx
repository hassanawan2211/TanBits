import './App.css'
import React  from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
       <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<ProductDetails />}/>
        </Routes>
        <SideBar />
        <Footer/>
       </Router>
    </>
  )
}

export default App
