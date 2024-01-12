import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from '../Component/SignUp';
import Login from '../Component/Login';
import Dashboard from '../Component/Dashboard'
import About from '../Component/About';
import Services from '../Component/Services';
import Contact from '../Component/Contactus';
import Header from '../Component/Header';
import Layout from '../Layout';
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
   </Routes>
   
   </BrowserRouter>
  )
}

export default AppRoutes;


