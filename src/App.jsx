import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import satData from "./components/satData.jsx"; // Ensure the path to satData is correct
import Banner from "./components/banner.jsx";

function App() {
  // State variable to hold the current satellite data
  const [sat, setSat] = useState(satData);

  // Variable to hold unique orbit types
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // Function to filter satellites by orbit type
  const filterByType = (currentType) => {
    const newSatDisplay = satData.filter(
      (data) => data.orbitType === currentType
    );
    setSat(newSatDisplay); // Update the state with the filtered data
  };

  return (
    <div>
      <Banner/>
      <Buttons filterByType={filterByType} 
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
