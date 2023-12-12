import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import { persistStore,persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import daysSlice from "./slices/daysSlice";
import userSlice from "./slices/userSlice";
import slotsSlice from "./slices/slotsSlice";
import attendanceSlice from "./slices/attendanceSlice";
import costSlice from "./slices/costSlice";
import componentController from "./slices/componentController";



// const persistConfig = {
//     key: 'root',
//     version:1,
//     storage,
//   };

const reducers=combineReducers({
    dayRed:daysSlice,
    userRed:userSlice,
    slotRed:slotsSlice,
    attRed:attendanceSlice,
    componentRed:componentController,
    costRed:costSlice,
    
})

// const persistedReducer = persistReducer(persistConfig, reducer);


const Store=configureStore({
    reducer:reducers
});

// const persistor = persistStore(Store);

export { Store  /*, persistor */};


// export default Store;