import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './Component';
import { Home, About, Contact, Uppgift2, Uppgift3 } from './Pages';


function App() {
  return (
          <>
            <Navbar />
            <div className="main-layout flex flex-col min-h-screen">
              <div className="flex flex-grow">
                <Sidebar className="h-full" />
                <main className="content flex-1">
                
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/uppgift2" element={<Uppgift2 />} />
                    <Route path="/uppgift3" element={<Uppgift3 />} />
                  </Routes>
                </main>
              </div>
          </div>
      </>


  );
}

export default App;
