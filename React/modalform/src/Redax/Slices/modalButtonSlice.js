import { createSlice } from '@reduxjs/toolkit'

const modalButtonSlice = createSlice({
    name: 'modalButton',
    initialState: {
      value : false,
    },
    reducers: {
      openOrCloze(state) {
          state.value = !state.value
      },
    },
  })
  
  export const { openOrCloze } = modalButtonSlice.actions
  export default modalButtonSlice.reducer