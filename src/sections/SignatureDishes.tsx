import { signatureDishes } from '../data';
import { motion } from 'framer-motion';

const SignatureDishes = () => {
  return (
    <section className="py-24 bg-white relative text-prussian border-t border-prussian/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-prussian/10 pb-8">
          <div>
            <span className="text-coral uppercase tracking-widest text-sm font-medium mb-4 block">Classics</span>
            <h2 className="text-4xl md:text-5xl font-serif text-prussian">Signature Dishes</h2>
          </div>
          <a href="#menu" className="text-prussian/70 hover:text-raspberry transition-colors uppercase tracking-widest text-sm font-medium flex items-center gap-2">
            View Full Menu
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-16">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-offwhite">
                <div className="absolute inset-0 bg-prussian/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{
                    objectPosition:
                      dish.name === 'Classic Tiramisu' ? '50% 90%' : '50% 50%',
                  }}
                />
                <div className="absolute top-4 right-4 bg-white text-prussian px-4 py-2 font-medium z-20 text-sm tracking-wider border border-prussian/10 shadow-sm">
                  {dish.price}
                </div>
              </div>
              <h3 className="text-2xl font-serif text-prussian mb-3 group-hover:text-coral transition-colors duration-300">
                {dish.name}
              </h3>
              <p className="text-prussian/70 font-light leading-relaxed">
                {dish.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
