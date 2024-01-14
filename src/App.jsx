import AppRoutes from "./AppRoutes";
import { useSelector } from "react-redux";
function App() {
const isAuth=useSelector((state)=> state.Data.isAuthentication);
console.log('isAuth',isAuth);
  return (<>
    <AppRoutes/>
  </>)
}

export default App;
