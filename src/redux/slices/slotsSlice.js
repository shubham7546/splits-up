import { createSlice } from "@reduxjs/toolkit";

// Initial state is an object with a property `name` initialized as an empty array.
const initialState = { name: [] };

// Creating the slotsSlice using createSlice from Redux Toolkit.
const slotsSlice = createSlice({
    name: "slotsSlice", // Name of the slice
    initialState, // Initial state
    reducers: {
        // Action to set the state template
        setState_template: (state, action) => {
            return action.payload;
        },

        // Action to add a slot for a specific user
        addSlots: (state, action) => {
            const name = action.payload;
            state[name]?.push("");
        },

        // Action to remove the last slot for a specific user
        removeSlots: (state, action) => {
            const name = action.payload;
            state[name].pop();
        },
    },
});

// Exporting the actions and the reducer from the slotsSlice
export const { addSlots, removeSlots, setState_template } = slotsSlice.actions;
export default slotsSlice.reducer;
