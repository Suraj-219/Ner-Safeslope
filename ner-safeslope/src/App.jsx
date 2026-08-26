import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Reporting from './pages/Reporting';
import Alerts from './pages/Alerts';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/dashboard"  element={<Dashboard />} />
            <Route path="/analytics"  element={<Analytics />} />
            <Route path="/reporting"  element={<Reporting />} />
            <Route path="/alerts"     element={<Alerts />} />
            <Route path="/about"      element={<About />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" toastOptions={{
          style: { fontFamily: 'Inter, sans-serif', fontSize: 13 }
        }} />
      </div>
    </Router>
  );
}

export default App;
