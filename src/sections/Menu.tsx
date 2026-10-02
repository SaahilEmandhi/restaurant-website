import { useState } from 'react';
import { menuCategories, fullMenu } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  return (
    <section id="menu" className="py-24 md:py-32 bg-offwhite relative border-t border-prussian/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-coral uppercase tracking-widest text-sm font-medium mb-4 block">A La Carte</span>
          <h2 className="text-4xl md:text-5xl font-serif text-prussian">The Menu</h2>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                'text-sm md:text-base uppercase tracking-widest font-medium transition-colors duration-300 pb-2 border-b-2',
                activeCategory === category 
                  ? 'text-raspberry border-raspberry' 
                  : 'text-prussian/40 border-transparent hover:text-prussian hover:border-prussian/30'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            >
              {fullMenu[activeCategory as keyof typeof fullMenu].map((item: any, index) => (
                <div key={index} className="flex flex-col group">
                  <div className="flex justify-between items-baseline border-b border-prussian/10 pb-4 mb-3 relative">
                    <h4 className="text-xl font-serif text-prussian group-hover:text-cherry transition-colors flex items-center gap-3">
                      {item.name}
                      {item.indicator === 'vegetarian' && (
                        <span className="text-[10px] uppercase tracking-wider bg-green-100 text-green-800 px-2 py-0.5 border border-green-200">V</span>
                      )}
                      {item.indicator === 'spicy' && (
                        <span className="text-[10px] uppercase tracking-wider bg-cherry/10 text-cherry px-2 py-0.5 border border-cherry/20">Spicy</span>
                      )}
                      {item.indicator === 'chef-special' && (
                        <span className="text-[10px] uppercase tracking-wider bg-amber/10 text-amber px-2 py-0.5 border border-amber/20">Special</span>
                      )}
                    </h4>
                    <span className="text-prussian font-medium ml-4">{item.price}</span>
                  </div>
                  <p className="text-prussian/70 font-light text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-20">
           <a 
              href="#reservation" 
              className="inline-block px-10 py-4 border border-prussian/20 hover:border-prussian text-prussian font-medium transition-all duration-300"
            >
              Book Your Table
            </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
