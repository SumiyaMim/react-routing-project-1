import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Navigation

const Navbar = () => {
  return (
    <nav>
        {/* <Link to='/' className='nav_link'>Home</Link>
        <Link to='/blogs' className='nav_link'>Blogs</Link>
        <Link to='/contact' className='nav_link'>Contact</Link> */}

        {/* Here, NavLink = used for display active link  */}
        {/* if click any link, NavLink added .active to that link  */}
        <NavLink to='/' className='nav_link'>Home</NavLink>
        <NavLink to='/about' className='nav_link'>About</NavLink>
        <NavLink to='/blogs' className='nav_link'>Blogs</NavLink>
        <NavLink to='/contact' className='nav_link'>Contact</NavLink>
    </nav>
  )
}

export default Navbar
