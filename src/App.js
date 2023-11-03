import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import cyberShowaTheme from './theme/theme';


function App() {
  return (
    <ThemeProvider theme={cyberShowaTheme}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
