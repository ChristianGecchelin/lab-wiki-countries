import CountryDetails from '../components/CountryDetails';
const CountriesList = (props) => {
  const { countries } = props;
  console.log(countries);
  return (
    <div>
      {countries.map((country) => {
        <CountryDetails />;
      })}
    </div>
  );
};

export default CountriesList;
