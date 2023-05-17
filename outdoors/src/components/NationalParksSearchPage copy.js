import React, { useState, useEffect } from 'react';
import nationalParksData from '../data/nationalparks.json';
import locationsData from '../data/locations.json';
import parkTypesData from '../data/parktypes.json';


function NationalParksSearchPage() {
  const [location, setLocation] = useState('');
  const [parkType, setParkType] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('../data/nationalparks.json');
        const nationalParksData = await response1.json();

        const response2 = await fetch('../data/locations.json');
        const locationsData = await response2.json();

        const response3 = await fetch('../data/parktypes.json');
        const parkTypesData = await response3.json();

        // Set the fetched data to your state variables here

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>National Parks Search Page</h2>
      {/* JSX code for your component */}
    </div>
  );
}

export default NationalParksSearchPage;
