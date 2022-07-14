import CountryDetails from '../components/CountryDetails';
const CountriesList = (props) => {
  const { countries } = props;
  console.log(countries);
  return (
    <div>
      <ul>
        <CountryDetails />
      </ul>
    </div>
  );
};

export default CountriesList;
