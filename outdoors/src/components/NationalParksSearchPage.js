import React, { useState, useEffect } from 'react';
import nationalParksData from '../data/nationalparks.json';

function NationalParksSearchPage() {
  const [location, setLocation] = useState('');
  const [parkType, setParkType] = useState('');
  const [searchResults, setSearchResults] = useState(nationalParksData.parks);

  useEffect(() => {
    const filterNationalParks = () => {
      const filteredParks = nationalParksData.parks.filter((park) => {
        const isLocationMatch = location ? park.City.toLowerCase().includes(location.toLowerCase()) : true;
        const isParkTypeMatch = parkType ? park.LocationID.toLowerCase().includes(parkType.toLowerCase()) : true;
        return isLocationMatch && isParkTypeMatch;
      });
      setSearchResults(filteredParks);
    };

    filterNationalParks();
  }, [location, parkType]);

  return (
    <div>
      <h2>National Parks Search Page</h2>
      <form>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Park Type:
          <input
            type="text"
            value={parkType}
            onChange={(e) => setParkType(e.target.value)}
          />
        </label>
      </form>

      <h3>Search Results:</h3>
      <ul>
        {searchResults.map((park) => (
          <li key={park.LocationID}>
            {park.LocationName} - {park.City}, {park.State}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NationalParksSearchPage;
