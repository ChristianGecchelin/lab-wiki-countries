import { Link } from 'react-router-dom';
const Country = (props) => {
  const { country, getParam } = props;
  const handlerLink = () => {
    debugger;
    getParam(country.alpha3Code);
  };
  return (
    <Link to={`/countries/${country.alpha3Code}`} onClick={handlerLink}>
      <p>{country.name.official}</p>
    </Link>
  );
};

export default Country;
