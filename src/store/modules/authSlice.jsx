import { createSlice } from '@reduxjs/toolkit';
import userData from '../../assets/api/userData';
const initialState = {
    user: null, //존재하지 않으면
    authed: false, //이부분은 펄스
    dataList: userData
};
// user1: {email: 'abc@naver.com', password:'1234'} 이 정보와 일치해야 authed가 트루로 변경.
let no = 1 
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const {email, password} = action.payload
            const newItem = state.dataList.find(item => item.email === email)
            if(newItem){
                if(newItem.password === password) {
                    state.user = newItem;
                    state.authed = true;
                }else{ 
                    state.user = null;
                    state.authed = false
                    alert('비밀번호가 틀렸습니다.')
                }
            }else{
                alert('아이디가 틀렸습니다.')
            }

        },
        logout: (state, action) => {
            state.user = null;
            state.authed = false;
        },
        signup:(state,action) => {
            const {email, tel, username, password} = action.payload
            
            state.dataList = [...state.dataList, {id:no++, ...action.payload}]

        },
        check: (state,action) => {
            const {email, nonEmailDuplication} = action.payload
            const emailItem = state.dataList.find(item => item.email === email) 
            if(emailItem){
                return {...action.payload,nonEmailDuplication:false}
            }else{
                return {...action.payload,nonEmailDuplication:true}
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup, check } = authSlice.actions;

export default authSlice.reducer;