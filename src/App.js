import NavBar from './components/Navbar/Navbar';
import HomePage from './components/Home/homepage';
import Footer from './components/Footer';
import Heroimage from './components/Home/Heroimage';
// import Loader from './components/preLoad';
import About from './components/About/about';
import Projects from './components/Projects/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <main>
      <NavBar />
      <HomePage />
      <Heroimage />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
