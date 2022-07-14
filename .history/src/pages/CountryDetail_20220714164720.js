import { useParams, Link } from 'react-router-dom';
const CountryDetail = (props) => {
  const { countries } = props;
  const { alpha3Code } = useParams();
  const selectedCountry = countries.filter((country) => {
    return country.alpha3Code === alpha3Code;
  });
  console.log(selectedCountry[0]);
  return (
    <div>
      <h2>Bienvenido a {selectedCountry.name.common}</h2>
      <Link to="/countries-list">
        <button>Volver a la Lista</button>
      </Link>
    </div>
  );
};

export default CountryDetail;