import './App.css';

import { 
  BrowserRouter as Router,
  Routes, 
  Route,
  Navigate,
} from "react-router-dom";

import Home from './Home';
import Game from './Game';

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" component={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
