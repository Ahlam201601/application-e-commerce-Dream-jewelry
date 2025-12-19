import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Wishlist from './pages/Wishlist'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
