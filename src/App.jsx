
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { useState } from 'react';


function App() {
  const [section, setSection] = useState('Home');

  const renderSection = () => {
    switch (section) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={() => setSection('Home')}>Home</button>
        <button onClick={() => setSection('About')}>About</button>
        <button onClick={() => setSection('Projects')}>Projects</button>
        <button onClick={() => setSection('Contact')}>Contact</button>
      </nav>
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
