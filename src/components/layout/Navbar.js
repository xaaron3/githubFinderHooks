import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// use Link from react-router-dom to keep state unchanged in other routes

const Navbar = ({ icon, title }) => {
   return (
      <nav className='navbar bg-primary'>
         <h1>
            <i className={icon}></i> {title}
         </h1>
         <ul>
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/about'>About</Link>
            </li>
         </ul>
      </nav>
   );
};

Navbar.defaultProps = {
   title: 'Github Finder Default',
   icon: 'fab fa-github'
};

Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired
};

export default Navbar;
