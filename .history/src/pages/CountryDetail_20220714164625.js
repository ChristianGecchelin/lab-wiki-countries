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
      <h1>Hola</h1>
      <Link to="/countries-list">
        <button>Volver a la Lista</button>
      </Link>
    </div>
  );
};

export default CountryDetail;
