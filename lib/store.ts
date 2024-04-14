import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./slices/countSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            count: countReducer,
        },
    });
};

// infer type by makestore
export type AppStore = ReturnType<typeof makeStore>;
// infer the rootstate and appdispatch
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
