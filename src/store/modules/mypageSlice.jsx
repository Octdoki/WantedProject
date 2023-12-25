import { createSlice } from '@reduxjs/toolkit';
import { technologyData } from '../../assets/api/mypageData';

const initialState = {
    technologyData:technologyData,
    tag:{},
};

export const mypageSlice = createSlice({
    name: 'mypage',
    initialState,
    reducers: {
        onSelect : (state, action) => {
            state.technologyData = state.technologyData.map(item => item.id === action.payload ? {...item,isOn:true}:{...item,isOn:false})
        },
        onTag : (state, action) => {
            state.tag = state.technologyData.map(item => item.id === action.payload ? {...item,isOn:true}:{...item,isOn:false})
        },
    },
});

export const { onSelect, onTag } = mypageSlice.actions;

export default mypageSlice.reducer;