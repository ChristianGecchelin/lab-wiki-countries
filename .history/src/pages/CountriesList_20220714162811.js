import { Link } from 'react-router-dom';
import CountryDetails from '../components/CountryDetails';
const CountriesList = (props) => {
  const { countries } = props;
  console.log(countries);
  return (
    <Link to="">
      {countries.map((country) => {
        return <CountryDetails country={country} />;
      })}
    </Link>
  );
};

export default CountriesList;
