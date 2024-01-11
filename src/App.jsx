// import SignUp from './SignUp'
// import Login from './Login';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AppRoutes from "./AppRoutes";
import { useSelector } from "react-redux";
import Dashboard from "./Component/Dashboard";
function App() {
const isAuth=useSelector((state)=> state.Data.isAuthentication);
console.log('isAuth',isAuth);
  return (<>
    <AppRoutes/>
  </>)
}

export default App;
