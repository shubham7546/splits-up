/* eslint-disable array-callback-return */
/* eslint-disable no-loop-func */
import { createSlice } from "@reduxjs/toolkit";

// Initial state is set to null.
const initialState = null;

// Creating the costSlice using createSlice from Redux Toolkit.
const costSlice = createSlice({
    name: "costSlice", // Name of the slice
    initialState, // Initial state
    reducers: {
        // Action to set the initial cost state for a user
        setCostState: (state, action) => {
            const user = action.payload;
            state = { ...state, [user]: 0 };
            return state;
        },

        // Action to update the cost distribution based on attendance and rate
        updateCost: (state, action) => {
            const users = action.payload.userRed;
            const att = action.payload.attRed;
            const day = action.payload.dayRed;
            const rate = action.payload.rate;

            // Loop through each user to initialize their cost to 0
            users.map((user) => {
                state = { ...state, [user]: 0 };
            });

            for (let i = 0; i < day.length; i++) {
                let count = 0;

                // Traverse through each user to count how many people were present on ith day
                users.map((user) => {
                    if (att[user][i] === true) {
                        count++;
                    }
                });

                const cost_on_ith_day = rate * day[i];

                let shared_price = 0;
                if (count !== 0) {
                    shared_price = cost_on_ith_day / count;
                }

                // Update the cost for each user who was present on ith day
                users.map((user) => {
                    if (att[user][i] === true) {
                        state[user] = state[user] + shared_price;
                    }
                });
            }

            return state;
        },
    },
});

// Exporting the actions and the reducer from the costSlice
export const { setCostState, updateCost } = costSlice.actions;
export default costSlice.reducer;
