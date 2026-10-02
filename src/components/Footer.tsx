import { navLinks } from '../data';

const Footer = () => {
  return (
    <footer className="bg-prussian border-t border-white/5 text-white">
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14 border-b border-white/10 pb-14">
          
          <div className="md:col-span-1">
            <a href="#" className="text-3xl font-serif font-semibold tracking-wide text-white block mb-5">
              Aura<span className="text-coral">.</span>
            </a>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-xs">
              A modern dining experience focused on seasonal ingredients, bold flavors, and intentional hospitality.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 font-medium mb-5 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-medium mb-5 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Terms of Service</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-light">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-medium mb-5 uppercase tracking-wider text-xs">Follow Us</h4>
            <div className="flex space-x-3">
              {['Ig', 'Fb', 'Tw'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-coral hover:border-coral transition-all text-xs font-medium"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
          <p>&copy; {new Date().getFullYear()} Aura Restaurant. All rights reserved.</p>
          <p>Designed for Portfolio Purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
