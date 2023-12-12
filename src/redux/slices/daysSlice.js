import { createSlice } from "@reduxjs/toolkit";

// Initial state is an empty array.
const initialState = [];

// Creating the daysSlice using createSlice from Redux Toolkit.
const daysSlice = createSlice({
    name: "daysSlice", // Name of the slice
    initialState, // Initial state
    reducers: {
        // Action to add fields to the state based on the provided number
        addField: (state, action) => {
            // Resetting the state to an empty array
            state.length = 0;

            // Adding fields to the state based on the provided number
            for (let i = 0; i < action.payload; i++) {
                state.push("");
            }
        },

        // Action to update a unit in the state
        updateUnit: (state, action) => {
            state[action.payload.i] = action.payload.val;
        },
    },
});

// Exporting the actions and the reducer from the daysSlice
export const { addField, updateUnit } = daysSlice.actions;
export default daysSlice.reducer;
