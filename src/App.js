import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './Component';
import { Home, About, Contact, Uppgift2, Uppgift3 } from './Pages';


function App() {
  return (
    <>
      <Navbar />
      <div className="main-layout flex flex-col min-h-screen w-full">
        <div className="flex flex-grow w-full">
          <Sidebar />
          <main className="flex-1 w-full">
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
