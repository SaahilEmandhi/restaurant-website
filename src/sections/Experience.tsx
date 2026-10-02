import { galleryImages } from '../data';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white border-t border-prussian/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Editorial Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <span className="text-coral uppercase tracking-widest text-sm font-medium mb-6 block">The Atmosphere</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-prussian leading-tight mb-8">
            More than a <span className="italic text-cherry">meal.</span>
          </h2>
          <p className="text-prussian/80 font-light text-lg md:text-xl leading-relaxed text-balance">
            Dining at Aura is an intentional experience. We have crafted an environment where time slows down, allowing the subtle details of hospitality, texture, and light to take center stage. Every element in our dining room is designed to foster connection—with the food, and with each other.
          </p>
        </div>

        {/* Masonry / Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Image 1 - Large Left */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 aspect-[4/3] relative group overflow-hidden border border-prussian/5"
          >
            <img 
              src={galleryImages[0]} 
              alt="The Dining Room" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
          
          {/* Image 2 - Small Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 aspect-[4/5] relative group overflow-hidden border border-prussian/5"
          >
            <img 
              src={galleryImages[3]} 
              alt="The Details" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Image 3 - Small Left */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 aspect-[4/5] relative group overflow-hidden border border-prussian/5 md:-mt-24"
          >
            <img 
              src={galleryImages[2]} 
              alt="The Atmosphere" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Image 4 - Large Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 aspect-[4/3] relative group overflow-hidden border border-prussian/5"
          >
            <img 
              src={galleryImages[1]} 
              alt="The Kitchen" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
