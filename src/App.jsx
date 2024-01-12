import AppRoutes from "./AppRoutes";
import { useSelector } from "react-redux";
import Layout from "./Layout";
function App() {
const isAuth=useSelector((state)=> state.Data.isAuthentication);
console.log('isAuth',isAuth);
  return (<>
    <AppRoutes/>
    {/* <Layout/> */}
  </>)
}

export default App;
