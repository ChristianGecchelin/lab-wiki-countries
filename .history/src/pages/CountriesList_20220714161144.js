import CountryDetails from '../components/CountryDetails';
const CountriesList = (props) => {
  const { countries } = props;
  console.log(countries);
  return (
    <ul>
      <CountryDetails />
    </ul>
  );
};

export default CountriesList;
