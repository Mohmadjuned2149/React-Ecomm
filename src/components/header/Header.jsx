import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/Config';
import Loader from '../loader/Loader';
import  './Head.css'
const Header = () => {
    const [isLoading, setIsLoading] = useState(false);
    const loggedOut =() => {
        setIsLoading(true);
        signOut(auth).then(() => {
            toast.success('Logged Out Successful');
            setIsLoading(false);
            // Sign-out successful.
          }).catch((error) => {
            toast.error(error);
            setIsLoading(false);
            // An error happened.
          });
          
    }
    return (
        <>
        {isLoading && <Loader/>}
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
                            <Link to='/' className='naitem' onClick={loggedOut}>Logout</Link>
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
        </>
    )
}

export default Header