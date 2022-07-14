import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import countries from './countries.json';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" element={<HomePage />} />

      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
