import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Post {
    id: string;
    title: string;
    images: string[];
    user: string; // username
}

interface StateProps {
    posts: Post[];
}

const initialState: StateProps = {
    posts: [
        {
            id: "lajçfdasd",
            title: "Post 1",
            images: [
                "https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_1280.jpg",
            ],
            user: "user1",
        },

        {
            id: "artzsfgsdfg",
            title: "Post 2",
            images: [
                "https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_1280.jpg",
            ],
            user: "user2",
        },

        {
            id: "xaskdjpru",
            title: "Post 3",
            images: [
                "https://cdn.pixabay.com/photo/2016/04/04/17/22/meal-1307604_1280.jpg",
                "https://cdn.pixabay.com/photo/2023/09/25/07/55/salad-8274421_1280.jpg",
                "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
            ],
            user: "user3",
        },
    ],
};

const feedSlice = createSlice({
    name: "feedSlice",
    initialState,
    reducers: {},
});

export const {} = feedSlice.actions;
export const selectFeed = (store: RootState) => store.feed;
export default feedSlice.reducer;
