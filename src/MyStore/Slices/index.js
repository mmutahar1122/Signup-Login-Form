import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpusers: [],
  loginUser: '',
  ContactusUser: [],
  isAuthentication: false,
  AllCategory:[],
  AnimalCategory: [],
  ClothCategory: [],
  CarCategory: [],
};



const Slices = createSlice({
  name: "Data",
  initialState,

  reducers: {
    Signup(state, action) {
      state.signUpusers = [...state.signUpusers, action.payload]
    },
    UserforLogin(state, action) {
      const currentUser = action.payload
      console.log('action.payload', action.payload);
      const RegisteredUsers = state.signUpusers;
      const userFound = RegisteredUsers.some(user => user?.email === currentUser?.email && user?.password === currentUser?.password);

      if (userFound) {
        state.isAuthentication = true
      } else {
        console.log("User nahi mila");
      }

    },
    ContactusData(state, action) {
      state.ContactusUser = action.payload
    },
    AnimalCat(state, action) {

      const updatedAnimalCategory = [
        ...state.AllCategory,
        action.payload
      ];
      console.log('state.AnimalCategory',state.AllCategory);


      return {
        ...state,
        AllCategory: updatedAnimalCategory
      };
      // AllCategory
    },
    ClothCat(state, action) {
      const updatedClothCategory=[
        ...state.AllCategory,
        action.payload
      ];
      console.log('state.AnimalCategory',state.AllCategory);

      return {
        ...state,
        AllCategory: updatedClothCategory
      }

    },
    CarCat(state, action) {
      const updatedAnimalCategory = [
        ...state.AllCategory,
        action.payload
      ];
      console.log('state.AnimalCategory',state.AllCategory);


      return {
        ...state,
        AllCategory: updatedAnimalCategory
      };

    }


  },
});
export default Slices;
export const { Signup, UserforLogin, ContactusData, AnimalCat, ClothCat, CarCat } = Slices.actions
