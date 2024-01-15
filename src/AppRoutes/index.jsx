import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from '../Component/SignUp';
import Login from '../Component/Login';
import Dashboard from '../Component/Dashboard'
import About from '../Component/About';
import Services from '../Component/Services';
import Contact from '../Component/Contactus';
import Header from '../Component/Header';
import Layout from '../Layout';
import DetailCart from '../Component/Dashboard/DetailCart';

import AnimalProduct from '../Component/Services/AnimalProduct';
import ClothProduct from '../Component/Services/ClothProduct';
import CarProduct from '../Component/Services/CarProduct';

function AppRoutes() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/dashboard' element={<Layout component={Dashboard} header={Header} isNavbar={true}/>}/>
    <Route path='/about' element={<Layout component={About} header={Header} isNavbar={true}/>} />
    <Route path='/services' element={<Layout component={Services} header={Header} isNavbar={true}/>}/>
    <Route path='/contact-us' element={<Layout component={Contact} header={Header} isNavbar={true}/>}/>
    <Route path='/detail-cart' element={<Layout component={DetailCart} header={Header} isNavbar={false}/>}/>
    <Route path='/animal-category' element={<Layout component={AnimalProduct} header={Header} isNavbar={false}/>}/>
    <Route path='/cloth-category' element={<Layout component={ClothProduct} header={Header} isNavbar={false}/>}/>
    <Route path='/car-category' element={<Layout component={CarProduct} header={Header} isNavbar={false}/>}/>
    
   </Routes>
   
   </BrowserRouter>
  )
}

export default AppRoutes;


