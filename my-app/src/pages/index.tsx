import Navbar from '../components/Navbar';
import Masthead from '../components/Masthead';
import Portfolio from '../components/Portfolio';
import Competences from '../components/Competences';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Portfolio />
      <Competences />
      <About />
      <Footer />
    </div>
  );
}
