import React from 'react';
import '../src/startbootstrap-clean-blog-gh-pages/css/clean-blog.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Container from './Components/Container/Container';

function App() {
  return (
    <div className="App">
  
      <Navbar />

      <Header />
      
      <Container />
  <hr/>
    <Footer />
    </div>
  );
}

export default App;
