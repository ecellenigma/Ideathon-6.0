import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Tracks from './pages/Tracks';
import Prizes from './pages/Prizes';
import WhatsInIt from './pages/WhatsInIt';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            <About />
            <Tracks />
            <Prizes />
            <WhatsInIt />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;