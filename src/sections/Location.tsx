const Location = () => {
  return (
    <section id="contact" className="bg-prussian text-white">
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl font-serif text-white mb-12">Visit Us</h2>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-amber uppercase tracking-widest text-xs font-medium mb-3">Location</h4>
                <p className="text-white/70 font-light leading-relaxed">
                  42 Amber Street<br />
                  Jubilee Hills<br />
                  Hyderabad, 500033
                </p>
              </div>
              
              <div>
                <h4 className="text-amber uppercase tracking-widest text-xs font-medium mb-3">Hours</h4>
                <div className="space-y-2 text-white/70 font-light text-sm">
                  <div className="flex justify-between max-w-[200px]">
                    <span>Mon – Thu</span>
                    <span>5pm – 10pm</span>
                  </div>
                  <div className="flex justify-between max-w-[200px]">
                    <span>Fri – Sat</span>
                    <span>5pm – 11pm</span>
                  </div>
                  <div className="flex justify-between max-w-[200px]">
                    <span>Sunday</span>
                    <span>4pm – 9pm</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-amber uppercase tracking-widest text-xs font-medium mb-3">Contact</h4>
                <p className="text-white/70 font-light mb-1">+91 98765 43210</p>
                <p className="text-white/70 font-light">reservations@aurarestaurant.com</p>
              </div>

              <a
                href="#reservation"
                className="inline-block px-8 py-3 border border-white/20 hover:border-coral text-white hover:text-coral transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                Reserve a Table
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] relative bg-prussian border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[#00001a] z-0"></div>
            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
              <div className="text-white/20 text-xs font-mono uppercase tracking-widest">Jubilee Hills, Hyderabad</div>

              <div className="relative w-full h-full flex items-center justify-center">
                {/* Grid lines for abstract map feel */}
                <svg className="absolute w-full h-full opacity-10 stroke-current text-white" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                  <line x1="0" y1="100" x2="400" y2="100" strokeWidth="0.5" />
                  <line x1="0" y1="200" x2="400" y2="200" strokeWidth="0.5" />
                  <line x1="100" y1="0" x2="100" y2="300" strokeWidth="0.5" />
                  <line x1="200" y1="0" x2="200" y2="300" strokeWidth="0.5" />
                  <line x1="300" y1="0" x2="300" y2="300" strokeWidth="0.5" />
                  <path d="M0,150 Q100,120 200,150 T400,140" fill="none" strokeWidth="0.8" />
                  <path d="M80,0 L80,300" fill="none" strokeWidth="0.5" strokeDasharray="4,4" />
                  <path d="M250,0 L250,300" fill="none" strokeWidth="0.5" strokeDasharray="4,4" />
                </svg>

                {/* Location pin */}
                <div className="relative z-20 flex flex-col items-center">
                  <div className="w-5 h-5 bg-raspberry relative border-2 border-white/80 rotate-45 mb-2">
                    <div className="absolute inset-0 bg-raspberry animate-ping opacity-40"></div>
                  </div>
                  <div className="bg-prussian border border-white/20 px-5 py-3 text-center -mt-1">
                    <p className="text-white font-serif text-xl">Aura</p>
                    <p className="text-white/50 text-xs tracking-wider uppercase">42 Amber Street</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
