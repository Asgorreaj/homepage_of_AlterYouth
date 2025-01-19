import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-green-600 text-2xl font-bold cursor-pointer">AlterYouth</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-green-600">About</Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-green-600">How It Works</Link>
            </li>
            <li>
              <Link href="/scholarships" className="hover:text-green-600">Scholarships</Link>
            </li>
            <li>
              <Link href="/collaborate" className="hover:text-green-600">Collaborate</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-green-600">Login</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Button for Mobile */}
        <button
          className="text-green-600 text-2xl focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col bg-white shadow-md p-4 space-y-4 md:hidden`}
      >
        <Link href="/about" className="hover:text-green-600">
          About
        </Link>
        <Link href="/how-it-works" className="hover:text-green-600">
          How It Works
        </Link>
        <Link href="/scholarships" className="hover:text-green-600">
          Scholarships
        </Link>
        <Link href="/collaborate" className="hover:text-green-600">
          Collaborate
        </Link>
        <Link href="/login" className="hover:text-green-600">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
