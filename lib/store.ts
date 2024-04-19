import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./slices/countSlice";
import feedSlice from "./slices/feedSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            count: countReducer,
            feed: feedSlice,
        },
    });
};

// infer type by makestore
export type AppStore = ReturnType<typeof makeStore>;
// infer the rootstate and appdispatch
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
