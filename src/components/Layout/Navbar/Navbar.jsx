import React, { useState } from 'react';
import './Navbar.css';
import Button from './../../Button';

const menuItems = [
  { title: 'Home', url: '/', cName: 'nav-links' },
  { title: 'Services', url: '/', cName: 'nav-links' },
  { title: 'Products', url: '/', cName: 'nav-links' },
  { title: 'Contact us', url: '/', cName: 'nav-links' },
  { title: 'Sign up', url: '/', cName: 'nav-links-mobile' },
];

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevState) => !prevState);
  };
  return (
    <nav className={'navbar-items'}>
      <h1 className={'navbar-logo'}>My logo</h1>
      <div className={'menu-icon'} onClick={handleClick}>
        <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {menuItems.map((item) => (
          <a key={item.title} href={item.url} className={item.cName}>
            {item.title}
          </a>
        ))}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};

export default Navbar;
