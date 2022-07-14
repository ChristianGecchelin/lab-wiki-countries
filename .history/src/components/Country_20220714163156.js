const Country = (props) => {
  const { country } = props;
  console.log(country);
  return (
    <div>
      <p>{country.name.common}</p>
    </div>
  );
};

export default Country;
