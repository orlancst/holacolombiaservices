import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SpanishClasses from './pages/SpanishClasses';
import Languages from './pages/Languages';
import Carnival from './pages/Carnival';
import Tourism from './pages/Tourism';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="spanish-classes" element={<SpanishClasses />} />
          <Route path="languages" element={<Languages />} />
          <Route path="carnival" element={<Carnival />} />
          <Route path="tourism" element={<Tourism />} />
          <Route path="request-service" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
