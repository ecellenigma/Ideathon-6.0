
import Landing from './pages/Landing';
import About from './pages/About';
import Tracks from './pages/Tracks';
import Prizes from './pages/Prizes';
import WhatsInIt from './pages/WhatsInIt';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Particle from './components/Particle';
import DottedParticles from './components/Dotted';

function App() {
    return (
        <div>
            <div className="absolute inset-0">
                 {/* <Particle />  */}
                 <DottedParticles/> 
         
            </div>
            <div className='relative z-10'>
            <Landing />
            <About />
            <Tracks />
            <Prizes />
            <WhatsInIt />
            <FAQ />
            <Contact />
            <Footer />
            </div>
         
        </div>
        
        
    );
}

export default App;