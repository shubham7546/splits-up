// Import necessary dependencies from React and Redux
import React from 'react';
import Slots from './Slots';
import Cost from './Cost';
import { useSelector } from 'react-redux';

// Define the main component, Change
function Change() {

  // Access the componentRed state from the Redux store
  const componentRed = useSelector((state) => state.componentRed);

  return (
    <div>
      {/* Conditionally render Slots component based on the componentRed state */}
      <div className={`${componentRed.cost === false ? "block" : "hidden"}`}>
        <Slots></Slots>
      </div>

      {/* Conditionally render Cost component based on the componentRed state */}
      <div>
        {componentRed.cost === true && <Cost></Cost>}
      </div>
    </div>
  );
}

// Export the Change component as the default export
export default Change;
