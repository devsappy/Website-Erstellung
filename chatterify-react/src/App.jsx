import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Services from './pages/Services'
import Contact from './pages/Contact'
import WebDevelopment from './pages/WebDevelopment';
import AIChatbots from './pages/AIChatbots';
import VoiceAgents from './pages/VoiceAgents';
import Templates from './pages/Templates';

import './style.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ai-chatbots" element={<AIChatbots />} />
        <Route path="/voice-agents" element={<VoiceAgents />} />
        <Route path="/templates" element={<Templates />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App