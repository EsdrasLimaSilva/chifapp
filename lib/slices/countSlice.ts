import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const countSlice = createSlice({
    name: "countSlice",
    initialState: { count: 0 },
    reducers: {
        increase(state) {
            state.count += 1;
        },
    },
});

export const { increase } = countSlice.actions;
export const selectCount = (store: RootState) => store.count;
export default countSlice.reducer;
