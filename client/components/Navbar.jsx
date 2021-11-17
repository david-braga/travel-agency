import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        DB Travel
                        <i className='navb-logo' />
                    </Link>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links'>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links'>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/book-now' className='nav-links'>
                            Book Now
                        </Link>
                    </li>
                </div>
            </nav>
        </>
    );
}

export default Navbar;













// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'


// function Navbar() {


//     return (
//         <>
//             <nav className="navbar">
//                 <div className='navbar-container'>
//                     <Link to='/' className='navbar-logo' onClick={CloseMobileMenu}>
//                         DB Travel
//                         <i className='' />
//                     </Link>
//                 </div>

//             </nav>
//         </>
//     )
// }

// export default Navbar