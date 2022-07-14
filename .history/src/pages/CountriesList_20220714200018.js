import Country from '../components/Country';
const CountriesList = (props) => {
  const { countries, getParam } = props;
  console.log(countries);
  return (
    <div>
      {countries.map((country) => {
        return <Country country={country} getParam={getParam} />;
      })}
    </div>
  );
};

export default CountriesList;
