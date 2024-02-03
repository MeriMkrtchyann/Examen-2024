import { configureStore } from '@reduxjs/toolkit'
import modalButtonReducer from "./Slices/modalButtonSlice"

const store = configureStore({
  reducer: {
    modalButton : modalButtonReducer
  },
})

export default store

