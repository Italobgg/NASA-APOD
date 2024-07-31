import React from 'react';
import AppNavbar from './components/Navbar.jsx';
import NasaApod from './components/NasaApod.jsx';
import APODInfo from './components/APODInfo.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <main className='container px-3 py-4'>
        <APODInfo />
        <NasaApod />
      </main>
      <Footer />
    </div>
  );
}

export default App;
