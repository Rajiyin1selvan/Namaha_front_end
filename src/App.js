import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/pooja' element={<ShopCategory category="pooja"/>}/>
        <Route path='/travel' element={<ShopCategory category="travel"/>}/>
        <Route path='/blogs' element={<ShopCategory category="blogs"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/testimonials' element={<Testimonials/>} />





      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
