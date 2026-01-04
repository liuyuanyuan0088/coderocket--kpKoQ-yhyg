import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <CoreValues />
      <Footer />
    </div>
  );
}
export default App;