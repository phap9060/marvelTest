import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from './configureStore'

const initialState: any = {
    item:[]
  };

export const comic = createSlice({
    name: 'comic',
    initialState,
    reducers: {
      comicPage(state, action: PayloadAction<any>) {
        state.item = action.payload
      }
    }
      
  })

export const {comicPage} = comic.actions

export const page = (state: RootState) => state.comic

export default comic.reducer