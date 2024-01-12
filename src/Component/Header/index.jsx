import Navbar from "./Navbar"

const Header=({children,isNavbar})=>{
    return <>
    {
        isNavbar && <Navbar/>
    }
    {children}
    </>
}

export default Header