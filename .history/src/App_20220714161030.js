import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
function App() {
  console.log(countries);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
