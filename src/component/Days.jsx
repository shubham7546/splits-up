/* eslint-disable react-hooks/exhaustive-deps */
// Import necessary dependencies from React and Redux
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addField, updateUnit } from '../redux/slices/daysSlice';
import { Link } from 'react-router-dom';
import DocLinks from './DocLinks';

// Define the main component, Days
function Days() {

  // State to manage the number of days
  const [days, setDays] = useState("");

  // Access the dayRed state from the Redux store
  const dayRed = useSelector((state) => state.dayRed);

  // Dispatch function to trigger actions
  const dispatch = useDispatch();

  // Function to handle changes in the input for the number of days
  function handleChange(e) {
    setDays(e.target.value);
  }

  // useEffect to dispatch an action when the number of days changes
  useEffect(() => {
    dispatch(addField(days));
  }, [days]);

  // Function to handle changes in the input for each unit
  function changeHandler(e, i) {
    const val = e.target.value;
    dispatch(updateUnit({ val, i }));
  }

  // JSX structure for the Days component
  return (
    <div>
      <DocLinks></DocLinks>


      <div className='inline-block min-h-screen text-center w-full'>



        <div className='m-2'>
          {/* Header for adding the number of days */}
          <p className='text-2xl text-animation'>add number of days served</p>

          {/* Input field for the number of days */}
          <input
            className='text-center border text-gray-500 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            type='number'
            value={days}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Conditional rendering for entering unit information */}
        {days > 0 && <h1>enter unit</h1>}

        {/* Mapping through dayRed array to render input fields for units */}
        <div>
          {
            dayRed.map((entry, i) => (
              <input
                className='px-4 py-2 rounded-md border border-gray-300  text-gray-500 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-500 bg-white hover:shadow-md transition duration-300 mb-2 mr-2'
                key={i}
                type="number"
                onChange={(e) => changeHandler(e, i)}
                placeholder={`Input ${i + 1}`}
              />
            ))}
        </div>

        <br></br>

        {/* Conditional rendering for the "Done" button */}
        {days > 0 &&
          <Link to="/user">
            <button className='px-1 py-1 bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>
              done
            </button>
          </Link>
        }
      </div>

    </div>
  )
}

// Export the Days component as the default export
export default Days;
