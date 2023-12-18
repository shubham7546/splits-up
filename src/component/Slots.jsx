/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSlots, removeSlots, setState_template } from '../redux/slices/slotsSlice';
import { setAttState, updateAtt } from '../redux/slices/attendanceSlice';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Slots() {


  const userRed = useSelector((state) => state.userRed);
  const slotRed = useSelector((state) => state.slotRed);
  const dayRed = useSelector((state) => state.dayRed);
  const [curr, setCurr] = useState(0);

  const totalDivs = userRed.length;
  function switchDiv(direction) {
    if (direction === "left") {
      setCurr(prev => {
        prev = prev - 1;
        if (prev < 0) {
          return totalDivs + prev;
        }
        else {
          return prev;
        }
      })
    }

    else {
      setCurr(prev => {
        return (prev + 1) % totalDivs;

      })
    }


  }



  // const [updated,setUpdated]=useState(false);



  const dispatch = useDispatch();

  // from ek object hoga jiska key value pair jaayege jisme key hoga hr bnde kaa naam
  //  or value hoga
  // uske 
  // corresponding usne jo from(s) me value(s) dala h (as an array jayega)
  const [from, setFrom] = useState({});
  // same for to
  const [to, setTo] = useState({});

  let slot_state = {

  }


  useEffect(() => {
    // basicaaly hme hrr user ke corresponding slot chahiye
    userRed.map((name) => {
      slot_state = {
        // map kr rha h to pichle wale ko preserve rkhne ke liye
        ...slot_state,
        // ab naye wale ko add krne ke liye
        [name]: []
      }
      // ye basicaaly jitne din h svke liye user kaa att false rkhega
      const days = dayRed.length;
      dispatch(setAttState({ name, days }));
    })
  }, [])



  // ye initial state set kr rha h basically slot kaa 
  // slotRed bss count rkhta h kitna slots h uska usme kya data h uska nhi
  useEffect(() => {
    dispatch(setState_template(slot_state));
  }, [])

  const navigate = useNavigate();
  function makeAtt() {
    userRed.map((user) => {

      const f = from[user];
      const t = to[user];

      dispatch(updateAtt({ f, t, user }));
      // dispatch(updateCompo({ compo: "cost", boolian: true }));
      navigate('/cost')

    })

  }

  function prefix(number) {
    if (number === 1) {
      return "st";
    }

    else if (number === 2) {
      return "nd";
    }

    else if (number === 3) {
      return "rd";
    }

    else {
      return "th";
    }
  }

  // yhi h svse bda game
  function slotsMaker(name, index) {

    function changeFrom(e, i) {

      const val = e.target.value;
      // jo pehle se tha wo to rhega hi
      let newFrom = { ...from };
      // agr pehle se kuch values pdi h uss name ke corresponding
      if (newFrom[name]) {
        let newarray = newFrom[name]
        // simply jonse bhi from wala dabba me value daala h wha update/write kro
        newarray[i] = val;
        newFrom = { ...from, [name]: newarray }

      }
      // agr nhi pdi to naya key value daaloge
      else {
        newFrom = { ...from, [name]: [] }
        // daalne ke baad update kroge
        newFrom[name][i] = val;
      }

      // ab from ko update krdo
      setFrom(newFrom);

    }


    function changeTo(e, i) {

      // same kaam as from 
      const val = e.target.value;
      let newTo = { ...to };

      if (newTo[name]) {

        let newarray = newTo[name]
        newarray[i] = val;
        newTo = { ...to, [name]: newarray }

      }
      else {

        newTo = { ...to, [name]: [] }
        newTo[name][i] = val;
      }

      setTo(newTo);


    }

    return <div key={index} className={`border-2 h-full font-bold  w-[350px] sm:w-[450px]  ${curr === index ? "flex" : "hidden"} flex-col items-center justify-end `}>

      {/* 1 */}

      <select className='h-10 w-[200px] text-center bg-inherit mt-2 ml-2 outline-none  ' onChange={(e) => changeCard(e)} value={`${userRed[curr]}`}>

        {userRed.map((name, i) => <option value={name} className="bg-black " key={i}>{name}</option>)}
      </select>
      {/* 2 */}
      <div className='rounded-xl mb-5 pt-2 place-items-center text-center overflow-y-auto h-full w-full bg-slate-400 '>

        {/*jitne bhi slots h hr bnde uske liye utne fields genernate krwa liya from or to wala */}
        {slotRed[name]?.map((entry, i) => {
          return <div className='h-auto flex flex-col md:flex-row justify-center items-center mb-5' key={index}>

            {/* ye from wala  */}
            <input
              className="h-10 mb-1 md:mr-1 sm:mb-0 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-500 placeholder-gray-500 bg-white hover:shadow-md transition duration-300 name-input"
              type="number"
              index={i}
              value={from[name]?.length > 0 ? from[name][i] : ""}
              onChange={(e) => {

                changeFrom(e, i);

              }}
              placeholder={`from (on ${i + 1 + prefix(i + 1)} stay)`}
            />

            {/* ye to wala */}
            <input
              className="h-10 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-500 placeholder-gray-500 bg-white hover:shadow-md transition duration-300 name-input"
              type="number"
              index={i}
              value={to[name]?.length > 0 ? to[name][i] : ""}
              onChange={(e) => changeTo(e, i)}
              placeholder={`to (on ${i + 1 + prefix(i + 1)} stay)`}
            />
          </div>
        }

        )}

      </div>


      {/* 3 */}
      <div className='flex flex-row justify-around h-[8%] w-full  my-2'>
        <button className=" w-[120px] rounded-md bg-gray-500 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300" onClick={() => dispatch(addSlots(name))}>
          add slot
        </button>

        {
          <span className={`select-none w-[120px] rounded-md bg-gray-500 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 flex flex-row justify-center items-center  ${slotRed[name]?.length > 0 ? "cursor-auto  bg-gray-500" : "cursor-not-allowed bg-gray-300"}`}>
            <button className={` ${slotRed[name]?.length > 0 ? "pointer-events-auto " : "pointer-events-none"} `} onClick={() => dispatch(removeSlots(name))}>
              remove slot
            </button>
          </span>
        }

      </div>

    </div>

  }

  function changeCard(e) {
    const curr_name = e.target.value;
    setCurr(userRed.indexOf(curr_name));
  }



  return (



    <div className='h-full pt-20 flex flex-col justify-start '>


      {/* 1 */}



      <div className=' flex flex-row h-[93%] justify-center items-center'>




        {/* 1.1 */}
        <button className='w-fit  h-fit bg-transparent text-4xl flex flex-row justify-end mr-3  items-center' onClick={() => switchDiv('left')}><FaArrowCircleLeft /></button>



        {/* 1.3 */}
        {
          userRed.map((name, i) => slotsMaker(name, i))
        }


        {/* 1.4*/}
        <button className="w-fit  h-fit  bg-transparent text-4xl flex flex-row justify-end ml-3  items-center" onClick={() => switchDiv('right')}><FaArrowAltCircleRight /></button>
      </div>




      {/* 2 */}

      <div className='w-full text-center h-[8%]   pt-2'>
        <button className={`h-[80%]  w-[50px] bg-blue-500  rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300`} onClick={() => makeAtt()} >
          done
        </button>

      </div>





    </div >




  )
}
export default Slots