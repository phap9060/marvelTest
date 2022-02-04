import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from './configureStore'
import {ResultData,APIdata} from './Types'


const initialState: APIdata = {
results: []
} 

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<ResultData>) {
      state.results.push(action.payload)
    },
    removeItem(state,action:PayloadAction<number>){
      state.results = state.results.filter(({id})=> (id !== action.payload)  )
    }
}})

export const {addCart,removeItem} = cart.actions

export const cartItems= (state:RootState) => state.cart

export default cart.reducer
