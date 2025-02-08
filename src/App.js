import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import OwnerDetails from './pages/OwnerDetails';
import Customized from './pages/Customized';
import ChatBot from './components/ChatBot';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/owner' element={<OwnerDetails />} />
        <Route path='/customized' element={<Customized />} />
      </Routes>
    </main>
    <ChatBot />
    <Footer />
  </Router>
);

export default App;