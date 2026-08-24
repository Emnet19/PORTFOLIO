import { useState, useEffect, createContext } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Services from './pages/Service'
import Certificate from './pages/Certificate'

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {}
});

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme} scroll-smooth transition-colors duration-300 min-h-screen`}>
        <section id='home'><Home /></section>
        <section id='skills'><Skills /></section>
        <section id='about'><About /></section>
        <section id='services'><Services /></section>
        <section id='projects'><Projects /></section>
        <section id='certificates'><Certificate /></section>
        <section id='Certificate' className="hidden" aria-hidden="true"></section>
        <section id='contact'><Contact /></section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
