import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const { language, translations, toggleLanguage } = useLanguage();
  const navItems = translations[language].navbar;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar bg-teal-950 text-white p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo Placeholder */}
        <div className="text-xl font-bold">
          <NavLink to="/" className="text-white hover:text-gray-300">
            <span className="text-yellow-300">S</span>tep
          </NavLink>
        </div>

        {/* قائمة التنقل التي تظهر في الشاشات الكبيرة */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-blue-500 transition duration-300 p-4"
            >
              {navItems.home}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              {navItems.about}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              {navItems.services}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              {navItems.projects}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              {navItems.faq}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              {navItems.contact}
            </NavLink>
          </li>
        </ul>

        {/* زر تغيير اللغة في الشاشات الكبيرة */}
        <button
          type="button"
          onClick={toggleLanguage}
          className="hidden md:flex items-center justify-center bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300"
        >
          {language === 'en' ? 'عربي' : 'English'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
            className="ml-2"
          >
            <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
          </svg>
        </button>

        {/* زر القائمة المنسدلة في الشاشات الصغيرة */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                className="stroke-current stroke-2"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* قائمة منسدلة في الشاشات الصغيرة */}
      {menuOpen && (
        <ul className="md:hidden bg-teal-950 text-white p-4 space-y-4">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-blue-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {navItems.home}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white hover:text-blue-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {navItems.about}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-white hover:text-blue-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {navItems.services}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="text-white hover:text-blue-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {navItems.projects}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="text-white hover:text-blue-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {navItems.resume}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white hover:text-blue-500 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {navItems.contact}
            </NavLink>
          </li>

          {/* زر تغيير اللغة في الشاشات الصغيرة */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={toggleLanguage}
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300 w-40 h-10 flex justify-center align-middle text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#e8eaed"
                className={language === 'en' ? '' : 'mr-4'}
              >
                <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" />
              </svg>
              {language === 'en' ? 'عربي' : 'English'}
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
