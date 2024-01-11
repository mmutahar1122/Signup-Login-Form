import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpusers:[],
  loginUser:'',
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

    }
    
  },
});
export default Slices;
export const {Signup,UserforLogin}=Slices.actions
