// import {configureStore} from '@reduxjs/toolkit';

// const store=configureStore({
//     reducer:{

//     }
// });

// export default store;
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authslice';  // ✅ Add this

const store = configureStore({
    reducer: {
        auth: authReducer,  // ✅ Fix: register the reducer
    }
});

export default store;