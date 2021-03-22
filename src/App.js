import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import MyLinks from './components/MyLinks/MyLinks';
import MyProjects from './components/MyProjects/MyProjects';
import BigPopup from './components/BigPopup/BigPopup';

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
