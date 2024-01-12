const Layout=({component : Component, header : Header, isNavbar = true})=>{

return <Header isNavbar={isNavbar} >

        <Component/>

    </Header>
}

export default Layout