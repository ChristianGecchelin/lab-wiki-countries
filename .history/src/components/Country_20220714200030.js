import { Link } from 'react-router-dom';
const Country = (props) => {
  const { country, getParam } = props;
  return (
    <Link to={`/countries/${country.alpha3Code}`}>
      <p>{country.name.official}</p>
    </Link>
  );
};

export default Country;
