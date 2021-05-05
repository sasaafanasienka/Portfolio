import './App.css';
import AboutMe from './components/AboutMe/AboutMe.tsx';
import MyLinks from './components/MyLinks/MyLinks.tsx';
import MyProjects from './components/MyProjects/MyProjects.tsx';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <MyLinks />
      <MyProjects />
    </div>
  );
}

export default App;
