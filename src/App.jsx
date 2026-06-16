import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Projeto } from './pages/Projeto';

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos/:slug" element={<Projeto />} />
        </Routes>
        <Footer />
      </MotionConfig>
    </BrowserRouter>
  );
}
