import { createSlice } from '@reduxjs/toolkit';
import { socialData } from '../../assets/api/socialdata';

const initialState = {
    socialData: socialData,
    social: [],
};

export const socialSlice = createSlice({
    name: 'social',
    initialState,
    reducers: {
        onCate: (state, action) => {
            if (action.payload === '전체') {
                state.socialData = socialData;
            } else {
                state.socialData = socialData.filter((item) => item.category === action.payload);
            }
        },
        searchSocial: (state, action) => {
            state.socialData = socialData.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
});

export const { onCate, searchSocial } = socialSlice.actions;
export default socialSlice.reducer;
