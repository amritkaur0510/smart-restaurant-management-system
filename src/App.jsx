import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter , Route , Routes } from 'react-router'
import Menu from './pages/Menu'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Reservation from './pages/Reservations'

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/menu' element = {<Menu/>}/>
        <Route path='/orders' element = {<Orders/>}/>
        <Route path='/cart' element = {<Cart/>}/>
         <Route path='/reservation' element = {<Reservation/>}/>
      
      </Routes>
      
      </BrowserRouter>
  
    </>
  )
}

export default App
