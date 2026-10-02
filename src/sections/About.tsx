import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-prussian relative text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-amber uppercase tracking-widest text-sm font-medium mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
              From our kitchen <br/><span className="text-coral italic">to your table.</span>
            </h2>
            <div className="space-y-6 text-white/70 font-light text-lg">
              <p>
                Aura started as a simple idea: to create a space where culinary ambition meets genuine hospitality. We didn't want to build just another fine dining establishment; we wanted a place that felt like coming home, if home had a world-class kitchen.
              </p>
              <p>
                Over the years, our relationships with local farmers, butchers, and artisans have shaped everything we do. The menu is written daily, dictated by the seasons and whatever our partners bring to the back door.
              </p>
              <p>
                We invite you to join us, slow down, and savor the details.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">2018</h4>
                <p className="text-sm text-white/50 uppercase tracking-widest">Established</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">15+</h4>
                <p className="text-sm text-white/50 uppercase tracking-widest">Local Partners</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[3/4] w-full overflow-hidden ml-auto lg:max-w-md bg-prussian/50">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1080&q=80" 
                alt="Chef preparing ingredients" 
                className="w-full h-full object-cover grayscale-[10%]"
              />
            </div>
            {/* Overlapping smaller image */}
            <div className="hidden md:block absolute -bottom-12 -left-12 w-64 aspect-square border-4 border-prussian bg-prussian/50 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80" 
                alt="Fresh ingredients" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
