import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const CountryDetail = (props) => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { alpha3Code } = useParams();
  const selectedCountry = countries.filter((country) => {
    return country.alpha3Code === alpha3Code;
  });
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://ih-countries-api.herokuapp.com/countries/${selectedCountry[0].alpha3Code.toLowerCase()}`
      )
      .then((response) => {
        console.log(response);
        setCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <h2>Bienvenido a {selectedCountry[0].name.official}</h2>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry[0].alpha2Code.toLowerCase()}.png`}
        alt={selectedCountry[0].name.common}
      /> */}
      <h2>Bienvenido a {country.name.official}</h2>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry[0].alpha2Code.toLowerCase()}.png`}
        alt={country.name.common}
      />

      <Link to="/countries-list">
        <button>Volver a la Lista</button>
      </Link>
    </div>
  );
};

export default CountryDetail;
