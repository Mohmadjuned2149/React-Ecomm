import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import  './Head.css'
const Header = () => {
    return (
        <header >
            <nav className='navbar navbar-expand-lg text-light nv'>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse'>
                        <div className="navbar-brand "><NavLink to='/home' className='naitem'>Navbar</NavLink></div>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item mx-5'>
                               <Link to='/home' className='naitem'>Home</Link> 
                            </li>
                            <li className='nav-item mx-5'>
                            <Link to='/cart' className='naitem'>Cart</Link>
                            </li>
                            <div className='collapse navbar-collapse subnav'>
                            <li className='nav-item mx-5'>
                            <Link to='/' className='naitem'>Logout</Link>
                            </li >
                            <li className='nav-item mx-5'>
                            <Link to='/' className='naitem'>Login</Link>
                            </li >
                            <li className='nav-item mx-5'>
                            <Link to='/register' className='naitem'>Register</Link>
                            </li >
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header