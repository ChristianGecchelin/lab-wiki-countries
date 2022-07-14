import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const CountryDetail = (props) => {
  const { alpha3Code } = useParams();
  /* const selectedCountry = props.countries.filter((country) => {
    return country.alpha3Code === alpha3Code;
  }); */

  return (
    <div>
      {/* <h2>Bienvenido a {selectedCountry[0].name.official}</h2>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry[0].alpha2Code.toLowerCase()}.png`}
        alt={selectedCountry[0].name.common}
      /> */}
      <h2>Bienvenido a </h2>
      <img src="" alt="" />

      <Link to="/countries-list">
        <button>Volver a la Lista</button>
      </Link>
    </div>
  );
};

export default CountryDetail;