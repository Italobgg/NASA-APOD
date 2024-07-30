import React from 'react';
import NasaApod from './components/NasaApod.jsx';
import AppNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <main className='container px-3 py-4'>
        <NasaApod />
      </main>
      <Footer />
    </div>
  );
}

export default App;
