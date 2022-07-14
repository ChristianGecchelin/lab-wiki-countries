import { useParams, Link } from 'react-router-dom';
const CountryDetail = (props) => {
  const { countries } = props;
  const { alpha3Code } = useParams();
  const selectedCountry = countries.filter((country) => {
    return country.alpha3Code === alpha3Code;
  });

  return (
    <div>
      <h2>Bienvenido a {selectedCountry[0].name.common}</h2>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry[0].alpha2Code}.png`}
        alt={selectedCountry[0].name.common}
      />
      <Link to="/countries-list">
        <button>Volver a la Lista</button>
      </Link>
    </div>
  );
};

export default CountryDetail;
