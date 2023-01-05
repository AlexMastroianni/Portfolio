import React, { useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import HomePage from './components/Home/homepage';
import Footer from './components/Footer';
import Heroimage from './components/Home/Heroimage';
import About from './components/About/about';
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => {
  // const [currentPage, setCurrentPage] = useState('Home');
  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return (<HomePage />)(<Heroimage />);
  //   }
  //   if (currentPage === 'Projects') {
  //     return <Projects />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  // };
  // const handlePageChange = (page) => setCurrentPage(page);

  const [loading, setLoading] = useState(true);

  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
    return (
      !loading && (
        <>
          <NavBar />
          <HomePage />
          <Heroimage />
          <About />
          <Projects />
          <Footer />
        </>
      )
    );
  }
};

export default App;
