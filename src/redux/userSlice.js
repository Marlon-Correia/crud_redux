import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
            const {id, name, email} = action.payload;
            const hasUser = state.find( userAc => userAc.id === id )
            if(hasUser){
                hasUser.name = name;
                hasUser.email = email
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const hasUser = state.find(user => user.id === id);
            if(hasUser) return state.filter(user => user.id !== id)
        }
    }
})

export const {addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
export const selectUser = state => state.users;