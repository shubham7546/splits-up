/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSlots, removeSlots, setState_template } from '../redux/slices/slotsSlice';
import { setAttState, updateAtt } from '../redux/slices/attendanceSlice';
// import { NavLink } from 'react-router-dom';
import { updateCompo } from '../redux/slices/componentController';

function Slots() {


  const userRed = useSelector((state) => state.userRed);
  const slotRed = useSelector((state) => state.slotRed);
  const dayRed = useSelector((state) => state.dayRed);

  // const componentRed=useSelector((state)=>state.componentRed);
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


  function makeAtt() {
    userRed.map((user) => {

      const f = from[user];
      const t = to[user];

      dispatch(updateAtt({ f, t, user }));
      dispatch(updateCompo({ compo: "cost", boolian: true }));

    })

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

    return <div className='mb-4'>

      <p className='text-2xl text-animation'>{name}</p>

      <div >
        <div className='space-x-5 text-start'>
          <button className="px-1 py-1 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300" onClick={() => dispatch(addSlots(name))}>
            add slot
          </button>

          {slotRed[name]?.length > 0 && <button className="px-1 py-1 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300" onClick={() => dispatch(removeSlots(name))}>
            remove slot
          </button>}

        </div>

        {/*jitne bhi slots h hr bnde uske liye utne fields genernate krwa liya from or to wala */}
        {slotRed[name]?.map((entry, i) => {
          return <div className='mb-3' key={index}>

            {/* ye from wala  */}
            <input
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500  placeholder-gray-500 bg-white hover:shadow-md transition duration-300 name-input"
              type="number"
              index={i}
              value={from[name]?.length > 0 ? from[name][i] : ""}
              onChange={(e) => {

                changeFrom(e, i);

              }}
              placeholder='from'
            />

            {/* ye to wala */}
            <input
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500  placeholder-gray-500 bg-white hover:shadow-md transition duration-300 name-input"
              type="number"
              index={i}
              value={to[name]?.length > 0 ? to[name][i] : ""}
              onChange={(e) => changeTo(e, i)}
              placeholder='to'
            />
          </div>
        }

        )}

      </div>

    </div>

  }



  return (


    <div className='h-screen inline-block text-center w-full '>

      <div className='h-screen text-2xl text-animation'>
        {
          userRed.map((name, i) => slotsMaker(name, i))
        }

        <button className='text-2xl text-animation' onClick={() => makeAtt()} >
          done
        </button>
      </div>
    </div>
  )

}

export default Slots
