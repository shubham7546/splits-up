/* eslint-disable react-hooks/exhaustive-deps */
// Import necessary dependencies from React and Redux
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUsers, updateUsers } from '../redux/slices/userSlice';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

// Define the main component, User
function User() {


  // State to manage the number of consumers
  const [users, setUsers] = useState("");

  // Access the userRed state from the Redux store
  const userRed = useSelector((state) => state.userRed);

  // Dispatch function to trigger actions
  const dispatch = useDispatch();


  const containerRef = useRef(null);
  const [isOverflowed, setIsOverflowed] = useState(false);



  // Function to handle changes in the input for the number of consumers
  function handleChange(e) {

    setUsers(e.target.value);
  }

  // useEffect to dispatch an action when the number of consumers changes
  useEffect(() => {

    dispatch(addUsers(users));
  }, [users]);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {

      setIsOverflowed(container.scrollHeight > container.clientHeight);
    }
  }, [userRed]);

  // Function to handle changes in the input for each consumer's name
  function changeHandler(e, i) {
    const val = e.target.value;
    dispatch(updateUsers({ val, i }));
  }

  return (

    //upper div
    <div className='h-full flex flex-col  pt-20 ' >



      {/* 1 */}
      {/* Header for adding the number of consumers */}
      <div className=' flex flex-row justify-center items-center h-[9%] '>

        {/* Input field for the number of consumers */}
        <input
          className="text-center border text-gray-500 border-gray-300  p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type='number'
          value={users}
          placeholder='people in group'
          onChange={(e) => handleChange(e)}
        />
      </div>


      {/* 2 */}
      <div className=' h-[80%] flex flex-col  items-center px-5 border-y-2 w-full'>
        {/* Conditional rendering for entering consumer names */}
        {users > 0 && <h1 className='text-xl'>enter name of people in group:</h1>}

        {

          < div ref={containerRef} className={`flex flex-col  overflow-y-auto h-[90%] gap-y-2 ${isOverflowed ? 'justify-start' : 'justify-center'
            }`}  >{
              userRed.map((entry, i) => (


                <input

                  key={i}
                  className=" text-center px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-500  placeholder-gray-500 bg-white hover:shadow-md transition duration-300 name-input"
                  type="text"
                  onChange={(e) => changeHandler(e, i)}
                  placeholder={`enter name ${i + 1}`}


                />


              ))
            }

          </div>
        }
      </div>

      {/* 3 */}
      {/* Conditional rendering for the "Done" button */}
      {
        <div className={`select-none w-full text-center p-2 h-[2%] mt-3 ${users ? "cursor-auto" : "cursor-not-allowed"}`}>

          <button className={`px-1 py-1   rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 font-black ${users ? "pointer-events-auto bg-blue-500" : "pointer-events-none bg-blue-100"} `}>
            <Link to="/slots" >
              done
            </Link>
          </button>


        </div>


      }



    </div>
  )
}

// Export the User component as the default export
export default User;
