/* eslint-disable react-hooks/exhaustive-deps */

// Import necessary dependencies from React and Redux
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCost } from '../redux/slices/costSlice';

// Define the main component, Cost
function Cost() {

  // Access states from the Redux store
  const attRed = useSelector((state) => state.attRed);
  const userRed = useSelector((state) => state.userRed);
  const costRed = useSelector((state) => state.costRed);
  const dayRed = useSelector((state) => state.dayRed);
  const [updated, setUpdated] = useState(false);

  // Dispatch function to trigger actions
  const dispatch = useDispatch();

  // State to manage the rate of each unit
  const [rate, setRate] = useState(0);

  useEffect(() => {
    // Update cost based on the rate when the rate changes
    dispatch(updateCost({ attRed, userRed, dayRed, rate }));
    setUpdated(true);
  }, [rate])

  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-2xl text-animation'>

      <div>
        {/* Input field to enter the cost of each unit */}
        <p>enter the cost of each unit:</p>
        <input
          className='text-gray-500'
          type='number'
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder='rate'
        />
      </div>

      <div>
        {/* Display the cost table if updated */}
        {
          updated && <table className="w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-blue-500  font-bold text-left">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Share</th>
              </tr>
            </thead>
            <tbody>
              {
                userRed.map((user, index) => (
                  <tr key={index} className={` ${index % 2 === 0 ? 'bg-gray-200 text-cyan-600' : 'bg-gray-400 text-cyan-50'} `}>
                    <td className="py-2 px-4 ">{user}</td>
                    <td className="py-2 px-4 ">{costRed[user].toFixed(2)}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>

    </div>
  )
}

// Export the Cost component as the default export
export default Cost;
