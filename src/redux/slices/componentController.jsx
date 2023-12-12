import { createSlice } from "@reduxjs/toolkit";

// Initial state defines the visibility status of different components.
let initialState = {
    days: false,
    user: false,
    slots: true,
    cost: false,
};

// Creating the componentControllerSlice using createSlice from Redux Toolkit.
const componentController = createSlice({
    name: 'componentController', // Name of the slice
    initialState: initialState, // Initial state
    reducers: {
        // Action to update the visibility status of a component
        updateCompo: (state, action) => {
            const compo = action.payload.compo;
            const boolian = action.payload.boolian;

            // Updating the visibility status of the specified component
            state[compo] = boolian;

            return state;
        },
    },
});

// Exporting the action and the reducer from the componentControllerSlice
export const { updateCompo } = componentController.actions;
export default componentController.reducer;
