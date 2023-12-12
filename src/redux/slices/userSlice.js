import { createSlice } from "@reduxjs/toolkit";

// Initial state is an empty array.
const initialState = [];

// Creating the userSlice using createSlice from Redux Toolkit.
const userSlice = createSlice({
    name: "userSlice", // Name of the slice
    initialState, // Initial state
    reducers: {
        // Action to add users to the state based on the provided number
        addUsers: (state, action) => {
            // Resetting the state to an empty array
            state.length = 0;

            // Adding users to the state based on the provided number
            for (let i = 0; i < action.payload; i++) {
                state.push("");
            }
        },

        // Action to update a user in the state
        updateUsers: (state, action) => {
            state[action.payload.i] = action.payload.val;
        },
    },
});

// Exporting the actions and the reducer from the userSlice
export const { addUsers, updateUsers } = userSlice.actions;
export default userSlice.reducer;
