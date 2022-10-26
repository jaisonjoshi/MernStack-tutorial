import './navbar.css';



const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav-brand">
                <h2>Let's travel</h2>
            </div>
            <div className="nav-links">
                <button className="btn">Login</button>
                <button className="btn">SignUp</button>

            </div>
        </div>
    )
}



export default Navbar;