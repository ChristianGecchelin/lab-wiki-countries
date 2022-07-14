import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import countries from './countries.json';
function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
