/* eslint-disable react-hooks/exhaustive-deps */
// Import necessary dependencies from React and Redux
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addField, updateUnit } from '../redux/slices/daysSlice';
import { Link } from 'react-router-dom';
// import DocLinks from './DocLinks';

// Define the main component, Days
function Days() {

  // State to manage the number of days
  const [days, setDays] = useState("");
  const [col, setCol] = useState("");

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
  useEffect(() => {

    let str = "md:grid-cols-" + Math.min(3, days);
    setCol(str);

  }, [dayRed]);



  // Function to handle changes in the input for each unit
  function changeHandler(e, i) {
    const val = e.target.value;
    dispatch(updateUnit({ val, i }));
  }



  // JSX structure for the Days component
  return (
    // top container
    <div className='h-full pt-20 flex flex-col '>
      {/* <DocLinks></DocLinks> */}

      {/* 1 */}
      <div className='flex flex-row justify-center items-center h-[9%]  '>
        {/* Header for adding the number of days */}
        <input
          className='text-center border text-gray-500 border-gray-300  p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500'
          type='number'
          value={days}
          placeholder='days served'
          onChange={(e) => handleChange(e)}
        />
      </div>


      {/* 2 */}
      <div className='h-[80%] flex flex-col border-y-2'>
        {/* 2.1*/}
        {days > 0 && <div class="flex flex-row justify-center items-center h-[10%] ">
          <h1 class="bg-black-300 p-1 m-3 rounded-lg text-center ">
            enter units received daywiswe
          </h1>
        </div>}

        {/* Mapping through dayRed array to render input fields for units */}
        {/* 2.2*/}


        <div className={`overflow-y-auto grid grid-cols-1 ${col} place-items-center h-[90%] pt-3`}>
          {
            dayRed.map((entry, i) => (
              <input
                className='w-60 px-4 text-center py-2 rounded-md border border-gray-300  text-gray-500 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-500 bg-white hover:shadow-md transition duration-300 mb-2 mr-2 h-[50px]'
                key={i}
                type="number"
                onChange={(e) => changeHandler(e, i)}
                placeholder={`unit received on day ${i + 1}`}
              />
            ))}
        </div>
      </div>






      {/*3*/}
      {/* Conditional rendering for the "Done" button */}
      {

        <div className={`select-none w-full text-center p-2 h-[2%] mt-3 ${days ? "cursor-auto" : "cursor-not-allowed"}`}>


          <button className={`${days ? "pointer-events-auto bg-blue-500" : "pointer-events-none bg-blue-100"} px-1 py-1  rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300`}>

            <Link to="/user" > done</Link>
          </button>


        </div>

      }

    </div>
  )
}

// Export the Days component as the default export
export default Days;
