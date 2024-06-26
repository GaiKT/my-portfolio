import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './assets/page/HomePage';
import AboutmePage from './assets/page/AboutmePage';
import WorkExp from './assets/page/WorkExp';
import ProsernalskillPage from './assets/page/ProsernalskillPage';
import CertificatePage from './assets/page/CertificatePage';
import ContactmePage from './assets/page/ContactmePage';
import ProjectPage from './assets/page/ProjectPage';
import "./App.css";

function App() {
  return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutmePage />} />
          <Route path="/workexp" element={<WorkExp />} />
          <Route path="/skill" element={<ProsernalskillPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/contactme" element={<ContactmePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
  );
}

export default App;
