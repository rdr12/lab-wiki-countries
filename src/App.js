import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <h1>LAB-WikiCountries</h1>

      <div id="mi-lab-countrys">
        <CountriesList />

        <Routes>
          <Route
            path="/:Id:"
            element={<CountryDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
