import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import SignatureDishes from './sections/SignatureDishes';
import Menu from './sections/Menu';
import About from './sections/About';
import Experience from './sections/Experience';
import Reviews from './sections/Reviews';
import Reservation from './sections/Reservation';
import Location from './sections/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <SignatureDishes />
        <Menu />
        <About />
        <Experience />
        <Reviews />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
