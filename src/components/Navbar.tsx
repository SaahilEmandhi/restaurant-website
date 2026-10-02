import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b',
          'bg-white/95 backdrop-blur-md py-4 shadow-sm border-prussian/10'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-serif font-semibold tracking-wide text-prussian z-50">
            Aura<span className="text-coral">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm font-medium tracking-wide transition-colors duration-200",
                  "text-prussian/80 hover:text-coral"
                )}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              className="px-6 py-2.5 bg-raspberry hover:bg-cherry text-white text-sm font-medium transition-colors duration-300"
            >
              Reserve a Table
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-prussian p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col md:hidden border-b border-prussian/10"
          >
            <nav className="flex flex-col space-y-6 text-center mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-prussian hover:text-coral transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8">
                <a
                  href="#reservation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block px-8 py-4 bg-raspberry text-white text-lg font-medium w-full"
                >
                  Reserve a Table
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
