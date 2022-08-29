import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    return(
        <div>
         <nav className="navbar navbar-expand-sm navbar-dark bg-success">
    <div className="container">
        <Link to="/" className="navbar-brand">
      <i className="fa fa-shopping-cart"></i>BigBasket 
      </Link>  
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
        <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link> 
            </li>
             <li className="nav-item">
                <Link to="/ProductDisplay" className="nav-link">Products</Link> 
            </li>
            <li className="nav-item">
                <Link to="/ProductAdmin" className="nav-link">Admin</Link> 
            </li>
          
        </ul>
      </div> 
      </div> 
      </nav>
        </div>
    )
}
export default Navbar;