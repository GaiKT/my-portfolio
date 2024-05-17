import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar'
import HomePage from './assets/page/HomePage'
import AboutmePage from './assets/page/AboutmePage';
import WorkExp from './assets/page/WorkExp';
import ProsernalskillPage from './assets/page/ProsernalskillPage';
import CertificatePage from './assets/page/CertificatePage';
import ContactmePage from './assets/page/ContactmePage';
import ProjectPage from './assets/page/ProjectPage';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex relative'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutmePage />} />
          <Route path="/workexp" element={<WorkExp />} />
          <Route path="/skill" element={<ProsernalskillPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/contactme" element={<ContactmePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
