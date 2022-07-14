import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import CountryDetail from './pages/CountryDetail';
import countries from './countries.json';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/countries-list"
          element={<CountriesList countries={countries} />}
        />
        <Route
          path="/countries/:countryName"
          element={<CountryDetail countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
