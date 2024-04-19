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
                "https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_1280.jpg",
                "https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_1280.jpg",
                "https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_1280.jpg",
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
