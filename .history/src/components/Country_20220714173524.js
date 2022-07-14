import { Link } from 'react-router-dom';
const Country = (props) => {
  const { country } = props;
  return (
    <Link to={`/countries/${country.alpha3Code}`}>
      <p>{country.name.common}</p>
    </Link>
  );
};

export default Country;
