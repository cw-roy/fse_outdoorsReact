import React, { useState } from 'react';
import nationalparks from '../data/nationalparks.json';
import parktypes from '../data/parktypes.json';
import locations from '../data/locations.json';

const NationalParksSearchPage = () => {
  const [searchBy, setSearchBy] = useState('location');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedParkType, setSelectedParkType] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle the search option change
  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  // Function to handle the selected location change
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Function to handle the selected park type change
  const handleParkTypeChange = (event) => {
    setSelectedParkType(event.target.value);
  };

  // Function to handle the search button click
  const handleSearch = () => {
    let filteredParks = [];

    if (searchBy === 'location') {
      filteredParks = nationalparks.filter((park) => park.State === selectedLocation);
    } else if (searchBy === 'parkType') {
      filteredParks = nationalparks.filter((park) => park.ParkType === selectedParkType);
    }

    setSearchResults(filteredParks);
  };

  return (
    <div>
      <h2>National Parks Search</h2>
      <div>
        <label htmlFor="searchBy">Search By:</label>
        <select id="searchBy" value={searchBy} onChange={handleSearchByChange}>
          <option value="location">Location</option>
          <option value="parkType">Park Type</option>
        </select>
      </div>
      {searchBy === 'location' && (
        <div>
          <label htmlFor="location">Location:</label>
          <select id="location" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">-- Select Location --</option>
            {/* Render the location options */}
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      )}
      {searchBy === 'parkType' && (
        <div>
          <label htmlFor="parkType">Park Type:</label>
          <select id="parkType" value={selectedParkType} onChange={handleParkTypeChange}>
            <option value="">-- Select Park Type --</option>
            {/* Render the park type options */}
            {parktypes.map((parkType) => (
              <option key={parkType} value={parkType}>
                {parkType}
              </option>
            ))}
          </select>
        </div>
      )}
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((park) => (
          <li key={park.LocationID}>{park.LocationName}</li>
        ))}
      </ul>
    </div>
  );
};

export default NationalParksSearchPage;
