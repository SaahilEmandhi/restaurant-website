import { motion } from 'framer-motion';

// Navbar is fixed at ~72px (py-6 = 24px top + 24px bottom + ~24px content).
// We use padding-top on the content wrapper rather than on the section
// so that flex vertical-centering accounts for the navbar from the very
// first paint — no scroll or layout-shift required.
const NAVBAR_HEIGHT = 80; // px — matches fixed nav height

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[640px] bg-white overflow-hidden">
      {/* Background: white left panel + photo right panel */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full md:w-5/12 h-full bg-white" />
        <div className="hidden md:block md:w-7/12 h-full relative">
          <div className="absolute inset-0 bg-prussian/10 z-10" />
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
            alt="Fine dining restaurant table"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Mobile-only full-bleed photo behind content */}
      <div className="absolute inset-0 z-0 md:hidden">
        <div className="absolute inset-0 bg-white/85 z-10" />
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
          alt="Fine dining restaurant table"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content — sits below the fixed navbar, flex-centred within the remaining viewport */}
      <div
        className="relative z-20 flex items-center"
        style={{
          paddingTop: NAVBAR_HEIGHT,
          minHeight: '100vh',
        }}
      >
        <div className="container mx-auto px-6 md:px-12 w-full flex md:flex-row flex-col py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full md:w-1/2 max-w-xl"
          >
            <span className="inline-block mb-6 text-xs md:text-sm font-medium tracking-[0.2em] text-coral uppercase">
              MODERN DINING • CRAFTED DAILY
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-prussian leading-tight mb-6">
              Good food.<br />
              <span className="italic text-cherry">Made memorable.</span>
            </h1>
            <p className="text-lg text-prussian/80 mb-10 max-w-md font-light leading-relaxed">
              Seasonal ingredients, bold flavors and a table worth gathering around.
              Experience dining thoughtfully reimagined.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#reservation"
                className="px-8 py-4 bg-raspberry hover:bg-cherry text-white font-medium transition-colors duration-300 text-center text-sm tracking-wide"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="px-8 py-4 border border-prussian/25 hover:border-prussian text-prussian font-medium transition-colors duration-300 bg-white text-center text-sm tracking-wide"
              >
                Explore Menu
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

