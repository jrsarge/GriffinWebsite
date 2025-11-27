import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [theme, setTheme] = useState('forest');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'forest' ? 'bright' : 'forest'));
  };

  // Render the current view
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home theme={theme} />;
      case 'projects':
        return <Projects theme={theme} />;
      case 'resume':
        return <Resume theme={theme} />;
      case 'contact':
        return <Contact theme={theme} />;
      default:
        return <Home theme={theme} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'forest' ? 'theme-forest' : 'theme-bright'}`}>
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
