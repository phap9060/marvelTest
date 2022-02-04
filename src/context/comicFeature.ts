import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from './configureStore'
import {ResultData} from '../TS/Types'
type ComicState = {
  data:ResultData
}
const initialState: ComicState = {} as ComicState

export const comic = createSlice({
    name: 'comic',
    initialState,
    reducers: {
      comicPage(state, action: PayloadAction<ResultData>) {
        state.data = action.payload
      }
    }
      
  })

export const {comicPage} = comic.actions

export const page = (state: RootState) => state.comic

export default comic.reducer