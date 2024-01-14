import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpusers:[],
  loginUser:'',
  ContactusUser:[],
  isAuthentication:false,
};



const Slices = createSlice({
  name: "Data",
  initialState,

  reducers: {
    Signup(state,action){
      state.signUpusers=[...state.signUpusers,action.payload]
    },
    UserforLogin(state,action){
     const currentUser=action.payload
      console.log('action.payload',action.payload);
      const RegisteredUsers=state.signUpusers;
      const userFound = RegisteredUsers.some(user => user?.email === currentUser?.email && user?.password === currentUser?.password); 

      if (userFound) {
        state.isAuthentication=true
      } else {
        console.log("User nahi mila");
      }

    },
    ContactusData(state,action){
      console.log('action.payload',action.payload)
      state.ContactusUser=action.payload
    }

    
  },
});
export default Slices;
export const {Signup,UserforLogin,ContactusData}=Slices.actions
