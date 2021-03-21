import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Links from './components/Links/Links';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Links />
      <Projects />
    </div>
  );
}

export default App;
