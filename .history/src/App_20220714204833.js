import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import CountryDetail from './pages/CountryDetail';
/* import countries from './countries.json'; */
function App() {
  const [countries, setCountries] = useState(null);
  const [param, setParam] = useState(null);
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const getParam = (param) => {
    setParam(param);
  };
  useEffect(() => {
    if (param) {
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${param}`)
        .then((response) => {
          setCountry(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [param]);
  console.log(country);
  return (
    <div className="App">
      <Navbar />
      {/* {countries && <CountriesList countries={countries} getParam={getParam} />} */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/countries-list"
          element={
            countries && (
              <CountriesList countries={countries} getParam={getParam} />
            )
          }
        />

        <Route
          path="/countries/:alpha3Code"
          element={
            country && <CountryDetail countries={countries} country={country} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
