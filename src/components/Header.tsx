
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { getAllCategories } from '@/lib/mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = getAllCategories();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50">
      <div className="bg-neubrutalism-dark text-neubrutalism-light border-b-4 border-neubrutalism-teal py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm font-bold animate-pulse">Welcome to my digital space</p>
        </div>
      </div>
      
      <div className="bg-white border-b-4 border-neubrutalism-dark">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="transform rotate-[-2deg] transition-transform hover:rotate-[2deg]">
              <h1 className="text-4xl md:text-5xl font-display text-neubrutalism-dark">
                <span className="text-neubrutalism-teal">Neu</span>Blog
              </h1>
            </Link>
            
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                <li>
                  <Link 
                    to="/"
                    className="font-bold text-neubrutalism-dark relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-neubrutalism-teal hover:after:w-full after:transition-all"
                  >
                    Home
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      to={`/category/${category.slug}`}
                      className="font-bold text-neubrutalism-dark relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-neubrutalism-teal hover:after:w-full after:transition-all"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/about"
                    className="font-bold text-neubrutalism-dark relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-neubrutalism-teal hover:after:w-full after:transition-all"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            
            <button 
              onClick={toggleMenu} 
              className="md:hidden neu-button p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-neubrutalism-light animate-fade-in">
          <div className="p-6 pt-20">
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 neu-button p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <nav>
              <ul className="flex flex-col gap-6 items-center">
                <li>
                  <Link 
                    to="/"
                    className="text-2xl font-bold"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id} className="animate-bounce-in" style={{animationDelay: `${parseInt(category.id) * 100}ms`}}>
                    <Link 
                      to={`/category/${category.slug}`}
                      className="text-2xl font-bold"
                      onClick={toggleMenu}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/about"
                    className="text-2xl font-bold"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
