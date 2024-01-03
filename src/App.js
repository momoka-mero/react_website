import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useTheme,ThemeProvider } from '@mui/material/styles';
import cyberShowaTheme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={cyberShowaTheme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const theme = useTheme();

  return (
    <div className="App" style={{ backgroundImage: theme.palette.background.default }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </div>
  );
}

export default App;