import Footer from './components/pages/Footer';
import Body from './components/pages/body';
import Service from './components/pages/Services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Resume from './components/pages/Resume'
import './App.css'; 
import {HashRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <main>
        <Container>
          <Routes>
            <Route path="/Port1" element={<Body />}></Route> 
            <Route path="/Port1/Service" element={<Service/>}></Route>
            <Route path="/Port1/contact" element={<Contact/>}></Route>
            <Route path="/Port1/Resume" element={<Resume/>}></Route>
            <Route path="/Port1/About" element={<About/>}></Route>
          </Routes>
        </Container>
      </main>
    </Router>   
       
 
  );
}

export default App;

