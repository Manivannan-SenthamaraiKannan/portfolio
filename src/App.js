import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        My Portfolio Works fine
        <Routes>
          {/* Home */}
          <Home />
          {/* Education */}
          {/* Experience */}
          {/* Projects */}
          {/* Contact Me */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
