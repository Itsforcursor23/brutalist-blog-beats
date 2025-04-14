
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neubrutalism-dark text-white pt-12 pb-6 border-t-4 border-neubrutalism-teal mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="transform rotate-[-1deg]">
            <h3 className="text-2xl font-display mb-4 text-neubrutalism-teal">
              <span className="text-white">Neu</span>Blog
            </h3>
            <p className="mb-4">
              A funky little blog about design, tech, and life in the digital age.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="text-white hover:text-neubrutalism-teal transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-neubrutalism-teal transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-neubrutalism-teal transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://github.com" className="text-white hover:text-neubrutalism-teal transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="transform rotate-[1deg]">
            <h3 className="text-xl font-bold mb-4 text-neubrutalism-teal">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" className="text-white hover:text-neubrutalism-teal transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/category/design" className="text-white hover:text-neubrutalism-teal transition-colors">Design</Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-white hover:text-neubrutalism-teal transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/category/lifestyle" className="text-white hover:text-neubrutalism-teal transition-colors">Lifestyle</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-neubrutalism-teal transition-colors">About</Link>
              </li>
            </ul>
          </div>
          
          <div className="transform rotate-[-1deg]">
            <h3 className="text-xl font-bold mb-4 text-neubrutalism-teal">Subscribe</h3>
            <p className="mb-4">Get the latest posts delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="neu-input text-neubrutalism-dark bg-white px-4 py-2"
                required
              />
              <button type="submit" className="neu-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neubrutalism-gray pt-6 text-center">
          <p className="text-neubrutalism-light text-sm">
            © {new Date().getFullYear()} NeuBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
