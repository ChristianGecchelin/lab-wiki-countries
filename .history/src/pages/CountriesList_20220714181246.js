import Country from '../components/Country';
const CountriesList = (props) => {
  const { countries } = props;
  return (
    <div>
      {countries.map((country) => {
        return <Country country={country} />;
      })}
    </div>
  );
};

export default CountriesList;
