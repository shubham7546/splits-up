/* eslint-disable react-hooks/exhaustive-deps */
// Import necessary dependencies from React and Redux
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUsers, updateUsers } from '../redux/slices/userSlice';
import { Link } from 'react-router-dom';

// Define the main component, User
function User() {

  // State to manage the number of consumers
  const [users, setUsers] = useState("");

  // Access the userRed state from the Redux store
  const userRed = useSelector((state) => state.userRed);

  // Dispatch function to trigger actions
  const dispatch = useDispatch();

  // Function to handle changes in the input for the number of consumers
  function handleChange(e) {
    setUsers(e.target.value);
  }

  // useEffect to dispatch an action when the number of consumers changes
  useEffect(() => {
    dispatch(addUsers(users));
  }, [users]);

  // Function to handle changes in the input for each consumer's name
  function changeHandler(e, i) {
    const val = e.target.value;
    dispatch(updateUsers({ val, i }));
  }

  return (

    <div className='min-h-screen inline-block text-center w-full ' >
      {/* Header for adding the number of consumers */}
      <p className='mb-3 text-2xl text-animation'>add number of consumer:</p>

      {/* Input field for the number of consumers */}
      <input
        className="border border-gray-300 p-2 text-gray-500 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        type='number'
        value={users}
        onChange={(e) => handleChange(e)}
      />
      <br></br>

      <br></br>

      {/* Conditional rendering for entering consumer names */}
      {users > 0 && <h1>enter name:</h1>}
      {
        userRed.map((entry, i) => (
          <input

            key={i}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-500  placeholder-gray-500 bg-white hover:shadow-md transition duration-300 name-input"
            type="text"
            onChange={(e) => changeHandler(e, i)}
            placeholder={`Input name ${i + 1}`}

          />
        ))
      }

      <br></br>

      {/* Conditional rendering for the "Done" button */}
      {users > 0 &&
        <h1>
          <Link to="/final">
            <button className='px-1 py-1 bg-blue-500  rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 font-black'>
              done
            </button>
          </Link>
        </h1>
      }
    </div>
  )
}

// Export the User component as the default export
export default User;
