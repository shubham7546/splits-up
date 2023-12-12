import { createSlice } from "@reduxjs/toolkit";

// Initial state is set to null.
let initialState = null;

// Creating the attendanceSlice using createSlice from Redux Toolkit.
const attendanceSlice = createSlice({
    name: "attendanceSlice", // Name of the slice
    initialState, // Initial state
    reducers: {
        // Action to set the attendance state
        setAttState: (state, action) => {
            const name = action.payload.name;
            const days = action.payload.days;
            state = { ...state, [name]: [] };

            // Initializing the attendance state for each day as false
            for (let i = 0; i < days; i++) {
                state[name][i] = false;
            }

            return state;
        },

        // Action to update the attendance based on provided range
        updateAtt: (state, action) => {
            const from = action.payload.f;
            const to = action.payload.t;
            const name = action.payload.user;

            // Updating the attendance state for the specified range
            for (let i = 0; i < from?.length; i++) {
                const f = from[i];
                const t = to[i];

                for (let j = f - 1; j <= t - 1; j++) {
                    state[name][j] = true;
                }
            }

            return state;
        },
    },
});

// Exporting the actions and the reducer from the attendanceSlice
export const { updateAtt, setAttState } = attendanceSlice.actions;
export default attendanceSlice.reducer;
