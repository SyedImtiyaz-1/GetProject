import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import OwnerDetails from './pages/OwnerDetails';
import Customized from './pages/Customized';
import ChatBot from './components/ChatBot';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path='/projects' 
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/projects/:id' 
            element={
              <ProtectedRoute>
                <ProjectDetails />
              </ProtectedRoute>
            } 
          />
          <Route path='/owner' element={<OwnerDetails />} />
          <Route path='/customized' element={<Customized />} />
        </Routes>
      </main>
      <ChatBot />
      <Footer />
    </Router>
  </ClerkProvider>
);

export default App;