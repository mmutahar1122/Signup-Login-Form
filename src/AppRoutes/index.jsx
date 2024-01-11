import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from '../Component/SignUp';
import Login from '../Component/Login';
import Dashboard from '../Component/Dashboard'
function AppRoutes() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default AppRoutes;


