import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Homepage Component
function Homepage() {
  return (
    <div>
      <h1>Our Organization</h1>
      <p>Welcome to our website! Explore the great outdoors with us.</p>
      <a href="/national-parks">National Parks</a>
      <a href="/mountains">Mountains</a>
    </div>
  );
}

// National Parks Search Page Component
function NationalParksSearchPage() {
  // State variables
  const [location, setLocation] = useState('');
  const [parkType, setParkType] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Fetch data from nationalparks.json, locations.json, and parktypes.json

  // Handle location search
  function handleLocationSearch(event) {
    setLocation(event.target.value);
    // Perform search based on location
  }

  // Handle park type search
  function handleParkTypeSearch(event) {
    setParkType(event.target.value);
    // Perform search based on park type
  }

  return (
    <div>
      <h2>National Parks Search Page</h2>
      <label>
        Search by Location:
        <select value={location} onChange={handleLocationSearch}>
          {/* Populate options from locations.json */}
        </select>
      </label>
      <label>
        Search by Park Type:
        <select value={parkType} onChange={handleParkTypeSearch}>
          {/* Populate options from parktypes.json */}
        </select>
      </label>
      {/* Display search results */}
      {/* Add "View All National Parks" option */}
      {/* Display park details with website hyperlink */}
    </div>
  );
}

// Mountains Information Page Component
function MountainsInformationPage() {
  // Fetch data from mountains.json

  // State variable
  const [selectedMountain, setSelectedMountain] = useState(null);

  // Handle mountain selection
  function handleMountainSelection(event) {
    const mountainId = event.target.value;
    // Find mountain details based on selected ID
    // Update selectedMountain state
  }

  return (
    <div>
      <h2>Mountains Information Page</h2>
      <label>
        Select a mountain:
        <select onChange={handleMountainSelection}>
          {/* Populate options from mountains.json */}
        </select>
      </label>
      {/* Display selected mountain details */}
      {/* Add mountain image */}
      {/* Display sunrise and sunset times using provided code snippet */}
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <Homepage />
      <NationalParksSearchPage />
      <MountainsInformationPage />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
