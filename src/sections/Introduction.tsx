import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section className="py-24 md:py-32 bg-offwhite relative overflow-hidden border-t border-prussian/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] w-full overflow-hidden border border-prussian/10 p-2 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1080&q=80" 
                alt="Chef plating a dish" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber -z-10 hidden md:block border border-prussian/10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-coral uppercase tracking-widest text-sm font-medium mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-prussian leading-tight mb-8">
              Food with a <br/><span className="text-cherry italic">point of view.</span>
            </h2>
            <div className="space-y-6 text-prussian/80 font-light text-lg">
              <p>
                We believe that great food shouldn't be overly complicated. It should be thoughtful, intentional, and rooted in the quality of its ingredients.
              </p>
              <p>
                Every dish we serve is a reflection of our commitment to local sourcing, seasonal shifts, and the simple joy of sharing a meal. We strip away the unnecessary to focus on what matters: pure, undeniable flavor.
              </p>
            </div>
            <div className="mt-12">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_of_John_Hancock.svg" 
                alt="Chef signature" 
                className="h-12 opacity-80"
              />
              <p className="text-sm text-prussian/50 mt-2 uppercase tracking-wider">Executive Chef</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;
