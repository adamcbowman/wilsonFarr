import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    // {
    //   name: 'About',
    //   link: '/about',
    // },
    {
      name: 'Cleaning Services',
      link: '/cleaning-services',
    },
    {
      name: 'Contact Us',
      link: '/contact',
    },
    {
      name: 'Terms of Service',
      link: '/terms-of-service',
    },
  ];

  return (
   
    <header className="top-0">
      <div className="container mx-auto py-6 px-8">

        {/* desktop nav */}
        <nav className="hidden md:flex mt-4 text-center items-center sm:mt-0 justify-center text-xl font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="pt-4 pb-2 mx-4 text-white font-semibold hover:text-primary transition duration-300"
              activeClassName="text-primary border-b-2 border-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* mobile nav */}
        <nav class="md:hidden px-4 py-4 flex justify-end items-center">
          {/* add icon !index page? */}
          <button class="outline-none mobile-menu-button" onClick={toggleMenu}>
            <svg
              class=" w-8 h-8 text-gray-500" 
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        {isOpen && (
          <div class="mobile-menu w-screen h-screen">
            <ul>
              {navLinks.map((link) => (
                <li className='py-4'>
                  <Link
                    key={link.name}
                    to={link.link}
                    className="block text-gray-100 text-2xl text-bold w-full px-2 py-4 transition duration-300"
                    activeClassName="text-primary underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
