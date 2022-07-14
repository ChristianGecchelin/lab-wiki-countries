import CountryDetails from '../components/CountryDetails';
const CountriesList = (props) => {
  const { countries } = props;
  return (
    <ul>
      <CountryDetails />
    </ul>
  );
};

export default CountriesList;
