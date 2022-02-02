import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from './configureStore'
interface Props  {
  id?: number;
  title?: string;
  prices?: [{ price: number }];
  thumbnail?: {
    extension?: string;
    path?: string;
  };
};

interface Items {
  items: Props[];
}
const initialState: Items = {
  items:[]
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<any>) {
      state.items.push(action.payload)
    },
    removeItem(state,action:PayloadAction<Items>){
      state.items = state.items.filter((id)=> id !==action.payload )
    }
}})

export const {addCart,removeItem} = cart.actions

export const cartItems= (state: RootState) => state.cart

export default cart.reducer
