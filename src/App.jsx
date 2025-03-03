import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToolProvider } from './context/ToolContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Compress from './pages/Compress';
import Resize from './pages/Resize';
import Crop from './pages/Crop';
import About from './pages/About';

function App() {
  return (
    <ToolProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compress" element={<Compress />} />
              <Route path="/resize" element={<Resize />} />
              <Route path="/crop" element={<Crop />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ToolProvider>
  );
}

export default App;