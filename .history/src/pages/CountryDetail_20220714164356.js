import { useParams, Link } from 'react-router-dom';
const CountryDetail = (props) => {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <div>
      <h1>Hola</h1>
      <Link to="/countries-list">
        <button>Volver a la Lista</button>
      </Link>
    </div>
  );
};

export default CountryDetail;
