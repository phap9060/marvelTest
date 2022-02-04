import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from './configureStore'

const initialState: any = {
  items:[]
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<any>) {
      state.items.push(action.payload)
    },
    removeItem(state,action:PayloadAction<any>){
      state.items = state.items.filter(({id}:any)=> (action.payload !== id)  )
    }
}})

export const {addCart,removeItem} = cart.actions

export const cartItems= (state:RootState) => state.cart

export default cart.reducer
