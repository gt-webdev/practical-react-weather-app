import './App.css';
import { Routes, Route } from 'react-router-dom';
import Weather from './Weather';
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1> Hi, I'm at the entry page </h1>} />
      <Route path="/page2" element={<h1> Now I am on a different page </h1>} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
}

export default App;